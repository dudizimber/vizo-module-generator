import { capitalize, startCase } from 'lodash';
export async function copyFile(
    vscode: typeof import('vscode'),
    context: import('vscode').ExtensionContext,
    outputChannel: import('vscode').OutputChannel,
    sourcePath: string,
    destPath: string,
    transformer?: (data: string) => string
) {
    try {
        const wsedit = new vscode.WorkspaceEdit();
        const wsPath = vscode.workspace.workspaceFolders![0].uri.fsPath;
        const data = await vscode.workspace.fs.readFile(
            vscode.Uri.file(context.asAbsolutePath(sourcePath))
        );
        const filePath = vscode.Uri.file(wsPath + destPath);
        wsedit.createFile(filePath, { ignoreIfExists: true });
        await vscode.workspace.fs.writeFile(filePath, transformer ? Buffer.from(transformer(Buffer.from(data).toString('utf-8'))) : data);
        let isDone = await vscode.workspace.applyEdit(wsedit);
        if (isDone) {
            outputChannel.appendLine(`File created successfully: ${destPath}`);
            return true;
        }
        return false;
    } catch (err) {
        outputChannel.appendLine(`ERROR: ${err}`);
        throw err;
    }
}

export const titleCase = (value: string) => startCase(value).replace(/ /g, '');