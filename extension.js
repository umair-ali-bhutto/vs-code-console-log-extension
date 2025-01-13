// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @author umair.ali
 * @since 08-JAN-2025
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('✨ umair.ali Says Congratulations, your extension "vs-code-console-log-extension" is now active!');
	vscode.window.showInformationMessage('✨ umair.ali Says Congratulations, your extension "vs-code-console-log-extension" is now active!');

	let disposable = vscode.commands.registerCommand('vs-code-console-log-extension.addConsoleLog', function () {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			/////////OLD
			// const document = editor.document;
			// const selection = editor.selection;
			// const selectedText = document.getText(selection);

			// const logText = selectedText
			// 	? `console.log('${selectedText}: ', ${selectedText});`
			// 	: "console.log('');";

			// const line = document.lineAt(selection.active.line);
			// const nextLinePosition = line.range.end.translate(0, 0);

			// editor.edit(editBuilder => {
			// 	editBuilder.insert(nextLinePosition, `\n${logText}\n`);
			// });



			////////////////////////// WORKS
			const document = editor.document;
			const selection = editor.selection;
			const selectedText = document.getText(selection);

			const logText = selectedText
				? `console.log('${selectedText}: ', ${selectedText});`
				: "console.log('$1');";

			const line = document.lineAt(selection.active.line);
			const nextLinePosition = line.range.end.translate(0, 0);

			editor.insertSnippet(
				new vscode.SnippetString(`\n${logText}\n`),
				nextLinePosition
			);

		} else {
			vscode.window.showErrorMessage("No active editor found.");
			return;
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {
	// console.log('Your extension "vs-code-console-log-extension" by umair.ali is now In-active! 🔥');
	// vscode.window.showInformationMessage('Your extension "vs-code-console-log-extension" by umair.ali is now In-active! 🔥');
}

module.exports = {
	activate,
	deactivate
}
