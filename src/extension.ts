import * as vscode from 'vscode';
import { GLSLCompletionProvider } from './providers/completion';
import { GLSLSignatureHelpProvider } from './providers/signaturehelp';
import { GLSLHoverProvider } from './providers/hover';

import { diagnosticsCollection, getAnalyzer } from './language/analyzer/call';

export function activate(context: vscode.ExtensionContext) {

	// Extenstion Activated
	// console.log('Congratulations, your extension "glslextension" is now active!');

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(event =>
		{
			const document = event.document;

			if (document.languageId !== "glsl")
				return;

			getAnalyzer(document);
		})
	);

	const completionProvider = vscode.languages.registerCompletionItemProvider(
		"glsl",
		new GLSLCompletionProvider(),
		"."
	);

	const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
		"glsl",
		new GLSLSignatureHelpProvider(),
		"(",
		","
	);

	const hoverProvider = vscode.languages.registerHoverProvider(
		{ language: "glsl"},
		new GLSLHoverProvider()
	);

	const readShader = vscode.commands.registerCommand('glslextension.readShader', () => {

		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage("No editor is currently open.");
			return;
		}

		const document = editor.document;
		const shaderSource = document.getText();

		vscode.window.showInformationMessage(
			`Shader contains ${shaderSource.length} characters`
		);
	});

	const disposable = vscode.commands.registerCommand('glslextension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from GLSLextension!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(readShader);
	context.subscriptions.push(completionProvider);
	context.subscriptions.push(signatureHelpProvider);
	context.subscriptions.push(hoverProvider);
	context.subscriptions.push(diagnosticsCollection);
}

export function deactivate() {}
