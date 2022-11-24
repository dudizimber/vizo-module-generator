// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { mkdirSync, writeFileSync, copyFileSync, readFileSync } from 'fs';
import * as path from 'path';
import { copyFile, titleCase } from './utils';
import { upperFirst, } from 'lodash';
import { createRepository } from './repository_creator';
import { RepositoryTemplatesType } from './models';

let testChannel = vscode.window.createOutputChannel("Vizo");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.window.showInformationMessage('Vizo Module Generator is now active!');
	console.info('Vizo Module Generator is now active!');

	let cR = vscode.commands.registerCommand('vizo-module-generator.createRepository', async (resource: vscode.Uri) => {

		console.info('Creating repository...');

		const repoName = await vscode.window.showInputBox({ prompt: 'Repository name' });

		if (!repoName) return;

		const repoType = await vscode.window.showQuickPick(['Empty', 'Firestore', 'Mongo', 'Http'], { placeHolder: 'Repository implementation type' });

		if (!repoType) return;

		createRepository(vscode, context, testChannel, repoName, repoType as RepositoryTemplatesType);

	});

	context.subscriptions.push(cR);

}

// This method is called when your extension is deactivated
export function deactivate() { }
