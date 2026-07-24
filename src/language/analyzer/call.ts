import { Lexer } from "../lexer/lexer";
import { ParseError, Parser } from "../parser/parser";
import { Analyzer } from "./analyzer";

import * as vscode from "vscode";

export const diagnosticsCollection = vscode.languages.createDiagnosticCollection("glsl");

export function getAnalyzer(document: vscode.TextDocument): Analyzer | null {

    try {
        const source = document.getText();

        const lexer = new Lexer();
        const tokens = lexer.tokenize(source);

        // console.log("Lexer Completed!");

        const parser = new Parser();
        const program = parser.parse(tokens);

        // console.log("Parser Completed!");

        const analyzer = new Analyzer(parser.getEnd());
        analyzer.analyze(program);

        // console.log("ANALYZING Completed!");

        const errors = analyzer.getErrors();
        const diagnostics: vscode.Diagnostic[] = [];

        for (const error of errors) {

            // console.log(error.message);
            
            const range = new vscode.Range(
                error.token.line,
                error.token.column,
                error.token.line,
                error.token.column + error.token.lexeme.length
            );

            diagnostics.push(
                new vscode.Diagnostic(
                    range,
                    error.message,
                    vscode.DiagnosticSeverity.Error
                )
            );
        }

        diagnosticsCollection.clear();
        diagnosticsCollection.set(document.uri, diagnostics);

        return analyzer;
    }
    catch (error) {
        console.log("Failed. ", error);

        // if (error instanceof ParseError) {

        //     // console.log(error.token);
        //     console.log(error.message);

        //     const range = new vscode.Range(
        //         error.token.line,
        //         error.token.column,
        //         error.token.line,
        //         error.token.column + error.token.lexeme.length
        //     );

        //     const diagnostic = new vscode.Diagnostic(
        //         range,
        //         error.message,
        //         vscode.DiagnosticSeverity.Error
        //     );

        //     diagnosticsCollection.clear();
        //     diagnosticsCollection.set(document.uri, [diagnostic]);
        // }
    }

    return null;
}