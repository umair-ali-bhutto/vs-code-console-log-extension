// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @author umair.ali
 * @version 1.0
 * @since 08-JAN-2025
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('✨ umair.ali Says Congratulations, your extension "vs-code-console-log-extension" is now active!');
	vscode.window.showInformationMessage('✨ umair.ali Says Congratulations, your extension "vs-code-console-log-extension" is now active!');

	let disposable = vscode.commands.registerCommand('vs-code-console-log-extension.addConsoleLog', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const selectedText = document.getText(selection);

			const logText = selectedText
				? `console.log('${selectedText}:', ${selectedText});`
				: "console.log('');";

			editor.edit(editBuilder => {
				editBuilder.insert(selection.end, `\n${logText}`);
			});
		}
	});

	context.subscriptions.push(disposable);



	// // DEFAULT TEMPLATE
	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "vs-code-console-log-extension" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with  registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('vs-code-console-log-extension.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from vs-code-console-log-extension!');
	// });

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {
	console.log('Your extension "vs-code-console-log-extension" by umair.ali is now In-active! 🔥');
	vscode.window.showInformationMessage('Your extension "vs-code-console-log-extension" by umair.ali is now In-active! 🔥');
}

module.exports = {
	activate,
	deactivate
}
