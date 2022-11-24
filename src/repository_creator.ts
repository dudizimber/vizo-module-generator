import { repositoryTemplates, RepositoryTemplatesType } from './models';
import { copyFile, titleCase } from './utils';

export const createRepository = async (
    vscode: typeof import('vscode'),
    context: import('vscode').ExtensionContext,
    channel: import('vscode').OutputChannel,
    repoName: string,
    repositoryType: RepositoryTemplatesType,
) => {
    console.log(repositoryType);

    await copyFile(vscode, context, channel,
        repositoryTemplates[repositoryType].interface,
        `/${repoName}/I` + titleCase(repoName) + 'Repository.ts',
        (data: string) => {
            return data.replace(/IRepository/g, `I${titleCase(repoName)}Repository`);
        }
    );

    await copyFile(vscode, context, channel,
        repositoryTemplates[repositoryType].implementation,
        `/${repoName}/I` + titleCase(repoName) + `RepositoryImpl${repositoryType}.ts`,
        (data: string) => {
            return data
                .replace(/IRepository/g, `I${titleCase(repoName)}Repository`)
                .replace(/IRepositoryImpl/g, `I${titleCase(repoName)}RepositoryImpl${repositoryType}`);
        }
    );

    await copyFile(vscode, context, channel,
        repositoryTemplates[repositoryType].index,
        `/${repoName}/index.ts`,
        (data: string) => {
            return data
                .replace(/IRepository/g, `I${titleCase(repoName)}Repository`)
                .replace(/IRepositoryImpl/g, `I${titleCase(repoName)}RepositoryImpl${repositoryType}`);
        }
    );

}