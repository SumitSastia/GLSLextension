"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLSLHoverProvider = void 0;
const vscode = __importStar(require("vscode"));
const builtInConstants_1 = require("../language/builtInConstants");
const builtInFunctions_1 = require("../language/builtInFunctions");
const builtInUniforms_1 = require("../language/builtInUniforms");
const builtInVariables_1 = require("../language/builtInVariables");
const lexer_1 = require("../language/lexer/lexer");
const parser_1 = require("../language/parser/parser");
// import { DATA_TYPES } from "../language/datatypes";
// import { KEYWORDS } from "../language/keywords";
// import { PREPROCESSORS } from "../language/preprocessor";
// import { QUALIFIERS } from "../language/qualifiers";
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
class GLSLHoverProvider {
    // private findDeclaration(
    //     node: ASTNode,
    //     name: string
    // ): DeclarationNode | null
    // {
    //     switch (node.kind)
    //     {
    //         case "Program":
    //         {
    //             for (const declaration of node.declarations)
    //             {
    //                 const result = this.findDeclaration(declaration, name);
    //                 if (result) return result;
    //             }
    //             break;
    //         }
    //         case "FunctionDeclaration":
    //         {
    //             const result = this.findDeclaration(node.body, name);
    //             if (result) return result;
    //             break;
    //         }
    //         case "Block":
    //         {
    //             for (const statement of node.statements)
    //             {
    //                 const result = this.findDeclaration(statement, name);
    //                 if (result) return result;
    //             }
    //             break;
    //         }
    //         case "VariableDeclaration":
    //         {
    //             if (node.name.lexeme === name)
    //                 return node;
    //             break;
    //         }
    //         case "StructDeclaration":
    //         {
    //             if (node.name.lexeme === name)
    //                 return node;
    //             break;
    //         }
    //         case "FunctionDeclaration":
    //         {
    //             if (node.name.lexeme === name)
    //                 return node;
    //             const result = this.findDeclaration(node.body, name);
    //             if (result) return result;
    //             break;
    //         }
    //         case "UnknownStatement":
    //             break;
    //     }
    //     return null;
    // }
    checkBlock(block, word) {
        for (const statement of block.statements) {
            if (statement.kind == "VariableDeclaration") {
                if (statement.name.lexeme === word) {
                    const md = new vscode.MarkdownString();
                    md.appendCodeblock(`${statement.type.lexeme} ` + statement.name.lexeme, "glsl");
                    return md;
                }
            }
            if (statement.kind == "BlockNode") {
                return this.checkBlock(statement, word);
            }
        }
        return null;
    }
    provideHover(document, position, token) {
        const source = document.getText();
        const lexer = new lexer_1.Lexer();
        const tokens = lexer.tokenize(source);
        const parser = new parser_1.Parser();
        const program = parser.parse(tokens);
        const range = document.getWordRangeAtPosition(position);
        if (!range)
            return;
        const word = document.getText(range);
        const md = new vscode.MarkdownString();
        const func = builtInFunctions_1.SIGNATURE_FUNCTIONS.find(f => f.name === word);
        if (func) {
            const signature = `${func.returnType} ${func.name}(` +
                func.parameters
                    .map(p => `${p.type} ${p.name}`)
                    .join(", ") +
                ")";
            // md.appendMarkdown(`**${func.name}**\n\n`);
            md.appendCodeblock(signature, "glsl");
            md.appendMarkdown(`${func.description}\n`);
            // md.appendMarkdown(`**Category:** ${func.category}\n\n`);
            // md.appendMarkdown(`**Since:** GLSL ${func.version}`);
            return new vscode.Hover(md);
        }
        const constant = builtInConstants_1.BUILTIN_CONSTANTS.find(c => c.name === word);
        if (constant) {
            md.appendCodeblock(constant.name, "glsl");
            md.appendMarkdown(`${constant.description}`);
            return new vscode.Hover(md);
        }
        const uniform = builtInUniforms_1.BUILTIN_UNIFORMS.find(u => u.name === word);
        if (uniform) {
            md.appendCodeblock(uniform.name, "glsl");
            md.appendMarkdown(`${uniform.description}`);
            return new vscode.Hover(md);
        }
        const bVariable = builtInVariables_1.BUILTIN_VARIABLES.find(v => v.name === word);
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
        for (const declaration of program.declarations) {
            switch (declaration.kind) {
                case "VariableDeclaration":
                    if (declaration.name.lexeme === word) {
                        md.appendCodeblock(`${declaration.type.lexeme} ` + declaration.name.lexeme, "glsl");
                        return new vscode.Hover(md);
                    }
                    break;
                // case "FunctionDeclaration":
                //     if (declaration.name === word)
                //     {
                //         const signature = `${declaration.returnType} ${declaration.name}(` +
                //             declaration.parameters
                //             .map(p => `${p.type.lexeme} ${p.name.lexeme}`)
                //             .join(", ") +
                //         ")";
                //         md.appendCodeblock(signature, "glsl");
                //         return new vscode.Hover(md);
                //     }
                //     // const md2 = this.checkBlock(declaration.body.block, word);
                //     // if (md2) return new vscode.Hover(md2);
                //     break;
                case "StructDeclaration":
                    if (declaration.name.lexeme === word) {
                        md.appendCodeblock(`struct ` + declaration.name.lexeme, "glsl");
                        return new vscode.Hover(md);
                    }
                    break;
            }
        }
        md.appendText("Unknown Type.");
        return new vscode.Hover(md);
    }
}
exports.GLSLHoverProvider = GLSLHoverProvider;
//# sourceMappingURL=temp.js.map