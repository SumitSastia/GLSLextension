import * as vscode from "vscode";

import { BUILTIN_CONSTANTS } from "../language/builtInConstants";
import { GLSL_FUNCTION_NAMES } from "../language/builtInFunctions";
import { BUILTIN_UNIFORMS } from "../language/builtInUniforms";
import { BUILTIN_VARIABLES } from "../language/builtInVariables";

import { DATA_TYPES } from "../language/datatypes";
import { KEYWORDS } from "../language/keywords";
import { PREPROCESSORS } from "../language/preprocessor";
import { QUALIFIERS } from "../language/qualifiers";

import { getAnalyzer } from "../language/analyzer/call";

import { Lexer } from "../language/lexer/lexer";
import { Parser } from "../language/parser/parser";
import { Analyzer } from "../language/analyzer/analyzer";

///////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////

export class GLSLCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {

        // console.log("Completion called");

        const line = document.lineAt(position.line).text;
        const beforeCursor = line.substring(0, position.character);

        /////////////////////////////////////////////////////////////////////////////////

        // const lexer = new Lexer();
        // const tokens = lexer.tokenize(source);

        // // console.log("COMPLETION: Lexer Completed!");

        // const parser = new Parser();
        // const program = parser.parse(tokens);

        // console.log("COMPLETION: Parser Completed!");

        const analyzer = getAnalyzer(document);
        // analyzer.analyze(program);

        if (!analyzer) return [];

        // console.log("COMPLETION: Analyzer Completed!");

        const scope = analyzer.findScope(position);
        
        // If struct member lookup
        // const matchdot = beforeCursor.match(/([A-Za-z_]\w*)\.$/);

        const matchdot = beforeCursor.match(
            /([A-Za-z_]\w*)\.\s*([A-Za-z_]\w*)?$/
        );

        const dotContext = /\.\s*[A-Za-z_]*$/.test(beforeCursor);

        // console.log(matchdot);
        
        if (dotContext) {
            if (!matchdot) {
                // console.log("returning");
                return [];
            }
        }

        if (matchdot) {

            // console.log("Found '.'");
            const objectName = matchdot[1];
            const memberPrefix = matchdot[2] ?? "";

            const builtInStruct = scope.lookupType(objectName);

            // Struct does not exist
            if (!builtInStruct) return [];

            const builtInStructMembers = analyzer.lookupStructType(builtInStruct.lexeme);
            
            // Built-in Struct
            if (builtInStructMembers) {

                const structItems: vscode.CompletionItem[] = [];

                for (const member of builtInStructMembers) {

                    if (!member.startsWith(memberPrefix)) continue;
                    const item = new vscode.CompletionItem(member, vscode.CompletionItemKind.Variable);
                    structItems.push(item);
                }

                return structItems;
            }
            
            const declaration = scope.lookupNode(objectName);

            if (declaration && declaration.kind == "VariableDeclaration") {

                const name = declaration.type.lexeme;
                const struct = analyzer.findStruct(name);

                // console.log(name);
                // console.log(struct);
                // console.log("not looping");

                if (struct) {

                    // console.log("Found struct");

                    const structItems: vscode.CompletionItem[] = [];

                    for (const member of struct.members) {

                        if (!member.name.lexeme.startsWith(memberPrefix)) continue;
                        const item = new vscode.CompletionItem(member.name.lexeme, vscode.CompletionItemKind.Variable);
                        structItems.push(item);
                    }
                    return structItems;
                }

                // console.log("struct not found");

                return [];
            }

            return [];
        }

        /////////////////////////////////////////////////////////////////////////////////

        const match = beforeCursor.match(/[A-Za-z_]\w*$/);
        const currentWord = match? match[0] : "";

        const items: vscode.CompletionItem[] = [];

        for (const constant of BUILTIN_CONSTANTS) {
            
            if (!constant.name.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(constant.name, vscode.CompletionItemKind.Constant);
            item.detail = constant.description;
            items.push(item);
        }

        // for (const func of SIGNATURE_FUNCTIONS) {
            
        //     if (!func.name.startsWith(currentWord)) continue;
            
        //     const item = new vscode.CompletionItem(func.name, vscode.CompletionItemKind.Function);
        //     items.push(item);
        // }

        for (const funcName of GLSL_FUNCTION_NAMES) {
            
            if (!funcName.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            items.push(item);
        }

        for (const uniform of BUILTIN_UNIFORMS) {
            
            if (!uniform.name.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(uniform.name, vscode.CompletionItemKind.Class);
            item.detail = uniform.description;
            items.push(item);
        }

        for (const variable of BUILTIN_VARIABLES) {
            
            if (!variable.name.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(variable.name, vscode.CompletionItemKind.Function);
            item.detail = variable.description;
            items.push(item);
        }

        for (const datatype of DATA_TYPES) {
            
            if (!datatype.name.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(datatype.name, vscode.CompletionItemKind.Function);
            item.detail = datatype.description;
            items.push(item);
        }

        for (const keyword of KEYWORDS) {

            if (!keyword.name.startsWith(currentWord)) continue;

            const item = new vscode.CompletionItem(keyword.name, vscode.CompletionItemKind.Keyword);
            item.detail = keyword.description;
            items.push(item);
        }
        
        for (const preprocessor of PREPROCESSORS) {
            
            if (!preprocessor.name.startsWith(currentWord)) continue;
            
            const item = new vscode.CompletionItem(preprocessor.name, vscode.CompletionItemKind.Class);
            item.detail = preprocessor.description;
            items.push(item);
        }

        for (const qualifer of QUALIFIERS) {

            if (!qualifer.name.startsWith(currentWord)) continue;

            const item = new vscode.CompletionItem(qualifer.name, vscode.CompletionItemKind.Constant);
            item.detail = qualifer.description;
            items.push(item);
        }

        ///////////////////////////////////////////////////////////////////////////////
        
        // Normal Completion Items
        const names = scope.lookupCompletionItem(currentWord);

        for (const name of names) {

            const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
            items.push(item);
        }
        
        // console.log("Completion finished");

        return items;
    }
}

///////////////////////////////////////////////////////////////////////////////