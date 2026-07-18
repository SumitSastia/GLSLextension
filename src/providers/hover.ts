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

        const func = SIGNATURE_FUNCTIONS.find(f => f.name === word);

        if (func) {

            const signature = `${func.returnType} ${func.name}(` +
                func.parameters
                .map(p => `${p.type} ${p.name}`)
                .join(", ") +
            ")";

            const md = new vscode.MarkdownString();

            // md.appendMarkdown(`**${func.name}**\n\n`);
            md.appendCodeblock(signature, "glsl");
            md.appendMarkdown(`${func.description}\n`);
    
            // md.appendMarkdown(`**Category:** ${func.category}\n\n`);
            // md.appendMarkdown(`**Since:** GLSL ${func.version}`);
            return new vscode.Hover(md);
        }
        
        const constant = BUILTIN_CONSTANTS.find(c => c.name === word);
        if (constant) return new vscode.Hover(constant.description);

        const uniform = BUILTIN_UNIFORMS.find(u => u.name === word);
        if (uniform) return new vscode.Hover(uniform.description);

        const variable = BUILTIN_VARIABLES.find(v => v.name === word);
        if (variable) return new vscode.Hover(variable.description);

        const dataType = DATA_TYPES.find(t => t.name === word);
        if (dataType) return new vscode.Hover(dataType.description);

        const keyword = KEYWORDS.find(k => k.name === word);
        if (keyword) return new vscode.Hover(keyword.description);

        const preprocessor = PREPROCESSORS.find(p => p.name === word);
        if (preprocessor) return new vscode.Hover(preprocessor.description);

        const qualifer = QUALIFIERS.find(q => q.name === word);
        if (qualifer) return new vscode.Hover(qualifer.description);

        return;
    }
}