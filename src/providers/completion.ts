import * as vscode from "vscode";
import { TYPES } from "../language/types";

export class GLSLCompletionProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.CompletionItem[] {

        const line = document.lineAt(position.line).text;
        const beforeCursor = line.substring(0, position.character);
        const match = beforeCursor.match(/[A-Za-z_]\w*$/);

        const currentWord = match? match[0] : "";
        // console.log(currentWord);

        const items: vscode.CompletionItem[] = [];

        for (const type of TYPES) {

            if (!type.name.startsWith(currentWord)) continue;

            const item = new vscode.CompletionItem(type.name, vscode.CompletionItemKind.Class);
            item.detail = type.description;
            items.push(item);
        }

        return items;
    }
}