import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	console.log('Congratulations, your extension "glslextension" is now active!');

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

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('glslextension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from GLSLextension!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(readShader);
}

export function deactivate() {}
