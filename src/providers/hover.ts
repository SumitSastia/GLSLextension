import * as vscode from "vscode";

import { BUILTIN_CONSTANTS } from "../language/builtInConstants";
import { SIGNATURE_FUNCTIONS } from "../language/builtInFunctions";
import { BUILTIN_UNIFORMS } from "../language/builtInUniforms";
import { BUILTIN_VARIABLES } from "../language/builtInVariables";

import { Lexer } from "../language/lexer/lexer";
import { Parser } from "../language/parser/parser";
import { sign } from "crypto";

// import { DATA_TYPES } from "../language/datatypes";
// import { KEYWORDS } from "../language/keywords";
// import { PREPROCESSORS } from "../language/preprocessor";
// import { QUALIFIERS } from "../language/qualifiers";

///////////////////////////////////////////////////////////////////////////////

import { BlockNode } from "../language/parser/ast";
import { Token, TokenType } from "../language/lexer/token";
import { Analyzer } from "../language/analyzer/analyzer";
import { Console } from "console";

///////////////////////////////////////////////////////////////////////////////

export class GLSLHoverProvider implements vscode.HoverProvider {

    private checkBlock(block: BlockNode, word: string): vscode.MarkdownString | null {

        const md = new vscode.MarkdownString();

        for (const statement of block.statements) {
            if (statement.kind === "VariableDeclaration") {

                if (statement.name.lexeme === word) {
                    md.appendCodeblock(`${statement.type.lexeme} ` + statement.name.lexeme, "glsl");
                    return md;
                }
            }

            if (statement.kind === "BlockNode") {
                const md2 = this.checkBlock(statement, word);
                if (md2) return md2;
            }
        }
        return null;
    }

    private outOfScope(node: Token, position: vscode.Position): boolean {

        if (node.line > position.line)
            return true;

        if (
            node.line === position.line &&
            node.column >= position.character
        )
            return true;

        return false;
    }

    provideHover(
        document: vscode.TextDocument, 
        position: vscode.Position, 
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover>
    {
        const md = new vscode.MarkdownString();
        const source = document.getText();

        // console.log("Checking!!");

        const range = document.getWordRangeAtPosition(position);
        if (!range) return;

        const word = document.getText(range);

        const func = SIGNATURE_FUNCTIONS.find(f => f.name === word);

        if (func) {

            const signature = `${func.returnType} ${func.name}(` +
                func.parameters
                .map(p => `${p.type} ${p.name}`)
                .join(", ") +
            ")";

            md.appendCodeblock(signature, "glsl");
            md.appendMarkdown(`${func.description}\n`);
            return new vscode.Hover(md);
        }
        
        const constant = BUILTIN_CONSTANTS.find(c => c.name === word);
        if (constant) {

            md.appendCodeblock(constant.name, "glsl");
            md.appendMarkdown(`${constant.description}`);
            return new vscode.Hover(md);
        }

        const uniform = BUILTIN_UNIFORMS.find(u => u.name === word);
        if (uniform) {

            md.appendCodeblock(uniform.name, "glsl");
            md.appendMarkdown(`${uniform.description}`);
            return new vscode.Hover(md);
        }

        const bVariable = BUILTIN_VARIABLES.find(v => v.name === word);
        if (bVariable) {

            md.appendCodeblock(bVariable.name, "glsl");
            md.appendMarkdown(`${bVariable.description}`);
            return new vscode.Hover(md);
        }

        // const dataType = DATA_TYPES.find(t => t.name === word);
        // if (dataType) {

        //     md.appendCodeblock(dataType.name, "glsl");
        //     md.appendMarkdown(`${dataType.description}`);
        //     return new vscode.Hover(md);
        // }

        // const keyword = KEYWORDS.find(k => k.name === word);
        // if (keyword) {

        //     md.appendCodeblock(keyword.name, "glsl");
        //     md.appendMarkdown(`${keyword.description}`);
        //     return new vscode.Hover(md);
        // }

        // const preprocessor = PREPROCESSORS.find(p => p.name === word);
        // if (preprocessor) {

        //     md.appendCodeblock(preprocessor.name, "glsl");
        //     md.appendMarkdown(`${preprocessor.description}`);
        //     return new vscode.Hover(md);
        // }

        // const qualifer = QUALIFIERS.find(q => q.name === word);
        // if (qualifer) {

        //     md.appendCodeblock(qualifer.name, "glsl");
        //     md.appendMarkdown(`${qualifer.description}`);
        //     return new vscode.Hover(md);
        // }

        // for (const declaration of program.declarations) {

        //     switch (declaration.kind)
        //     {
        //         // Global Variables
        //         case "VariableDeclaration":

        //             if (declaration.name.lexeme === word)
        //             {
        //                 if (this.outOfScope(declaration.name, position)) continue;
        //                 md.appendCodeblock(`${declaration.type.lexeme} ` + declaration.name.lexeme, "glsl");
        //                 return new vscode.Hover(md);
        //             }
        //             break;

        //         // Block Scope
        //         case "FunctionDeclaration":
                    
        //             if (declaration.name.lexeme === word)
        //             {
        //                 if (this.outOfScope(declaration.name, position)) continue;
        //                 const signature = `${declaration.returnType} ${declaration.name.lexeme}(` +
        //                     declaration.parameters
        //                     .map(p => `${p.type.lexeme} ${p.name.lexeme}`)
        //                     .join(", ") +
        //                 ")";

        //                 md.appendCodeblock(signature, "glsl");
        //                 return new vscode.Hover(md);
        //             }

        //             const md2 = this.checkBlock(declaration.body.block, word);
        //             if (md2) return new vscode.Hover(md2);
        //             break;

        //         case "StructDeclaration":
                    
        //             if (declaration.name.lexeme === word)
        //             {
        //                 if (this.outOfScope(declaration.name, position)) continue;
        //                 md.appendCodeblock(`struct ` + declaration.name.lexeme, "glsl");
        //                 return new vscode.Hover(md);
        //             }

        //             // for (const member of declaration.members) {
        //             //     if (member.name.lexeme === word)
        //             //     {
        //             //         if (this.outOfScope(member.name, position)) continue;
        //             //         md.appendCodeblock(`${member.type.lexeme} ${declaration.name.lexeme}::` + member.name.lexeme, "glsl");
        //             //         return new vscode.Hover(md);
        //             //     }
        //             // }
        //             break;
        //     }
        // }

        try {
            const lexer = new Lexer();
            const tokens = lexer.tokenize(source);

            // console.log("HOVER: Lexer Completed!");

            const parser = new Parser();
            const program = parser.parse(tokens);

            // console.log("HOVER: Parser Completed!");

            const analyzer = new Analyzer(parser.getEnd());
            analyzer.analyze(program);

            // console.log("HOVER: Analyzer Completed!");

            const scope = analyzer.findScope(position);
            // console.log("scope found!");
            const node = scope.lookup(word);
            // console.log("scope.lookup completed!");

            if (node) {
                switch (node.kind) {
                    
                    case "VariableDeclaration":
                        
                        if (this.outOfScope(node.name, position)) break;
                        md.appendCodeblock(`${node.type.lexeme} ` + node.name.lexeme, "glsl");
                        return new vscode.Hover(md);

                    case "FunctionDeclaration":

                        if (this.outOfScope(node.name, position)) break;
                        const signature = `${node.returnType} ${node.name.lexeme}(` +
                            node.parameters
                            .map(p => `${p.type.lexeme} ${p.name.lexeme}`)
                            .join(", ") +
                        ")";

                        md.appendCodeblock(signature, "glsl");
                        return new vscode.Hover(md);

                    default:
                        return null;
                }
            }
        }
        catch (e) {
            console.log("Hover failed, ", e);
        }

        return null;
    }
}