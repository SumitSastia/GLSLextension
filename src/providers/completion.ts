import * as vscode from "vscode";

import { BUILTIN_CONSTANTS } from "../language/builtInConstants";
import { GLSL_FUNCTION_NAMES } from "../language/builtInFunctions";
import { BUILTIN_UNIFORMS } from "../language/builtInUniforms";
import { BUILTIN_VARIABLES } from "../language/builtInVariables";

import { DATA_TYPES } from "../language/datatypes";
import { KEYWORDS } from "../language/keywords";
import { PREPROCESSORS } from "../language/preprocessor";
import { QUALIFIERS } from "../language/qualifiers";

import { Lexer } from "../language/lexer/lexer";
import { Parser } from "../language/parser/parser";
import { TokenType } from "../language/lexer/token";
import { Analyzer } from "../language/analyzer/analyzer";

///////////////////////////////////////////////////////////////////////////////

export class GLSLCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {

        // console.log("Completion called");

        const line = document.lineAt(position.line).text;
        const beforeCursor = line.substring(0, position.character);
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

        /////////////////////////////////////////////////////////////////////////////////

        const source = document.getText();

        const lexer = new Lexer();
        const tokens = lexer.tokenize(source);

        // console.log("COMPLETION: Lexer Completed!");

        const parser = new Parser();
        const program = parser.parse(tokens);

        // console.log("COMPLETION: Parser Completed!");

        const analyzer = new Analyzer(parser.getEnd());
        analyzer.analyze(program);

        // console.log("COMPLETION: Analyzer Completed!");

        const scope = analyzer.findScope(position);
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