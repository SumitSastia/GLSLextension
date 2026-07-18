import * as vscode from "vscode";

import { BUILTIN_CONSTANTS } from "../language/builtInConstants";
import { GLSL_FUNCTION_NAMES } from "../language/builtInFunctions";
import { BUILTIN_UNIFORMS } from "../language/builtInUniforms";
import { BUILTIN_VARIABLES } from "../language/builtInVariables";

import { DATA_TYPES } from "../language/datatypes";
import { KEYWORDS } from "../language/keywords";
import { PREPROCESSORS } from "../language/preprocessor";
import { QUALIFIERS } from "../language/qualifiers";

///////////////////////////////////////////////////////////////////////////////

export class GLSLCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {

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

        return items;
    }
}