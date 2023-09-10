// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

async function getUserInfo() {
	let userInputWindow = await vscode.window.showInputBox({
		placeHolder: "The display name of your app ...",
		prompt: "App Display Name",
		validateInput: (val) => {
			if (val.length === 0) {
				return "Please enter a name for the app!";
			}
		},
	});
	return userInputWindow;
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "redux-toolkit-saga-boilerplate" is now active!'
	);
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"redux-toolkit-saga-boilerplate.createToolkit",
		async () => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user

			await getUserInfo()
				.then(function (result) {
					const cmd =
						"npx react-native init " +
						result +
						" --template https://github.com/rushikeshpandit/react-native-template.git";
					const terminal = vscode.window.createTerminal("Ext Terminal");
					terminal.show();
					terminal.sendText(cmd);
				})
				.catch((error) => {
					console.log(
						"🚀 ~ file: extension.ts:41 ~ userResponse ~ error:",
						error
					);
				});

			// vscode.window.showInformationMessage(cmd);
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
