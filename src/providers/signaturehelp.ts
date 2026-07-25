import * as vscode from "vscode";

import { EXPANDED_SIGNATURES } from "../language/signatures/signatureExpander";
import { FunctionDeclarationNode } from "../language/parser/ast";
import { GLSLSignature } from "../language/signatures/functionFormat";
import { USERDEFINED_FUNCTIONS } from "../language/analyzer/analyzer";

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

function convertToGLSLSignature(): GLSLSignature[] {

    const signatures: GLSLSignature[] = [];

    for (const func of USERDEFINED_FUNCTIONS) {

        signatures.push({
            returnType: func.returnType,
            name: func.name.lexeme,
            description: "",
            category: "User Defined",
            version: "",

            parameters: func.parameters.map(param => ({
                type: param.type.lexeme,
                name: param.name.lexeme
            }))
        });
    }

    return signatures;
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

        const USERDEF_FUNCTIONS = convertToGLSLSignature();

        const ALL_FUNCTIONS: GLSLSignature[] = [
            ...EXPANDED_SIGNATURES,
            ...USERDEF_FUNCTIONS
        ];

        const overloads = ALL_FUNCTIONS.filter(s => s.name == functionName);
        // const overloads = EXPANDED_SIGNATURES.filter(s => s.name == functionName);
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