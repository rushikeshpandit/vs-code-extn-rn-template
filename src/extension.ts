// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "redux-toolkit-saga-boilerplate" is now active!'
	);
	let NEXT_TERM_ID = 1;
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"redux-toolkit-saga-boilerplate.helloWorld",
		async () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage(
				"Hello World from Redux Toolkit Saga Boilerplate!"
			);
			const userResponse = await vscode.window.showInputBox({
				placeHolder: "Type in your response",
			});
			console.log("🚀 ~ file: extension.ts:28 ~ userResponse:", userResponse);
			const terminal = vscode.window.createTerminal(
				`Ext Terminal #${NEXT_TERM_ID++}`
			);
			terminal.sendText(
				`echo Sent text immediately after creating #${userResponse}`
			);
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
