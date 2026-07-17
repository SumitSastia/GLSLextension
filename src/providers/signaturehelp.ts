import * as vscode from "vscode";
import { SIGNATURE_FUNCTIONS } from "../language/builtInFunctions";

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

        // const func = FUNCTIONS.find(f => f.name == functionName);
        // if (!func) return null;

        const commas = (beforeCursor.match(/,/g) || []).length;

        // const signature = new vscode.SignatureInformation(
        //     `${func.returnType} ${func.name}(${func.parameters
        //     .map(p => `${p.type} ${p.name}`)
        //     .join(", ")})`
        // );

        // signature.parameters = func.parameters.map(param =>
        //     new vscode.ParameterInformation(
        //         `${param.type} ${param.name}`
        //     )
        // );

        // help.signatures = [signature];
        // help.activeParameter = Math.min(commas, func.parameters.length - 1);
        
        // return help;
        
        const help = new vscode.SignatureHelp();
        // help.activeSignature = 0;
        // help.activeParameter = Math.min(commas, func.parameters.length - 1);

        const overloads = SIGNATURE_FUNCTIONS.filter(s => s.name == functionName);
        if (overloads.length === 0) return null;

        // help.signatures = overloads.map(overload => {

        //     const signature = new vscode.SignatureInformation(
        //         `${overload.returnType} ${overload.name}(${overload.parameters
        //         .map(p => `${p.type} ${p.name}`)
        //         .join(", ")})`
        //     );

        //     signature.documentation = new vscode.MarkdownString(overload.description);

        //     signature.parameters = overload.parameters.map(param => 
        //         new vscode.ParameterInformation(
        //             `${param.type} ${param.name}`,
        //             param.description
        //         )
        //     );

        //     return signature;
        // });

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

        return help;
    }
}