import * as vscode from 'vscode';
import { GLSLCompletionProvider } from './providers/completion';

export function activate(context: vscode.ExtensionContext) {

	// Extenstion Activated
	console.log('Congratulations, your extension "glslextension" is now active!');

	const completionProvider = vscode.languages.registerCompletionItemProvider(
		"glsl",
		new GLSLCompletionProvider()
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
}

export function deactivate() {}
