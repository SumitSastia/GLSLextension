import * as vscode from "vscode";

import { BUILTIN_CONSTANTS } from "../language/builtInConstants";
import { SIGNATURE_FUNCTIONS } from "../language/builtInFunctions";
import { BUILTIN_UNIFORMS } from "../language/builtInUniforms";
import { BUILTIN_VARIABLES } from "../language/builtInVariables";

import { DATA_TYPES } from "../language/datatypes";
import { KEYWORDS } from "../language/keywords";
import { PREPROCESSORS } from "../language/preprocessor";
import { QUALIFIERS } from "../language/qualifiers";

///////////////////////////////////////////////////////////////////////////////

interface VariableSymbol {
    name: string;
    type: string;
    scopeStart: number;
    scopeEnd: number;
}

// interface FunctionSymbol {
//     name: string;
//     returnType: string;
//     parameters: ...
// }

const variables = new Map<string, VariableSymbol>();

///////////////////////////////////////////////////////////////////////////////

export class GLSLHoverProvider implements vscode.HoverProvider {

    provideHover(
        document: vscode.TextDocument, 
        position: vscode.Position, 
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover>
    {
        const range = document.getWordRangeAtPosition(position);
        if (!range) return;

        const word = document.getText(range);
        const md = new vscode.MarkdownString();
        
        const variable = variables.get(word);
        if (variable) {

            md.appendCodeblock(`${variable.type} ${variable.name}`, "glsl");
            return new vscode.Hover(md);
        }

        const func = SIGNATURE_FUNCTIONS.find(f => f.name === word);

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

        return;
    }
}