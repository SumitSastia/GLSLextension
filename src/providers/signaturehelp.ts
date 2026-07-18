import * as vscode from "vscode";
import { EXPANDED_SIGNATURES } from "../language/signatures/signatureExpander";

function getActiveParameter(text: string): number {

    let depth  = 0;
    let commas = 0;

    for (let i = text.length - 1; i >= 0; --i) {

        const c = text[i];
        if (c === ')') depth++;

        else if (c === '(') {
            if (depth === 0) break;
            depth--;
        }

        else if (c === ',' && depth === 0) {
            commas++;
        }
    }

    return commas;
}

export class GLSLSignatureHelpProvider implements vscode.SignatureHelpProvider {
    
    provideSignatureHelp(
        document: vscode.TextDocument,
        position: vscode.Position
    ): vscode.SignatureHelp | null
    {
        const line = document.lineAt(position.line).text;
        const beforeCursor = line.substring(0, position.character);

        const match = beforeCursor.match(/([A-Za-z_]\w*)\s*\([^()]*$/);

        if (!match) return null;
        const functionName = match[1];
        
        const help = new vscode.SignatureHelp();

        const overloads = EXPANDED_SIGNATURES.filter(s => s.name == functionName);
        if (overloads.length === 0) return null;

        for (const sign of overloads) {

            const label = `${sign.returnType} ${sign.name}(` +
                sign.parameters.map(p => `${p.type} ${p.name}`).join(", ") +
            ")";

            const info = new vscode.SignatureInformation(label);

            for (const param of sign.parameters) {

                info.parameters.push(
                    new vscode.ParameterInformation(`${param.type} ${param.name}`)
                );
            }

            info.documentation = new vscode.MarkdownString(sign.description);

            help.signatures.push(info);
        }

        help.activeParameter = getActiveParameter(beforeCursor);
        help.activeSignature = 0;

        return help;
    }
}