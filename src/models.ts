
export enum RepositoryTemplatesType {
    Empty = 'Empty',
    Mongo = 'Mongo',
    Firestore = 'Firestore',
    Http = 'Http',
}

export const repositoryTemplates: Record<RepositoryTemplatesType, {
    interface: string;
    implementation: string;
    index: string;
}> = {

    [RepositoryTemplatesType.Empty]: {
        interface: 'templates/repository/empty/IRepository.ts',
        implementation: 'templates/repository/empty/IRepositoryImpl.ts',
        index: 'templates/repository/empty/index.ts',
    },

    [RepositoryTemplatesType.Mongo]: {
        interface: 'templates/repository/mongo/IRepository.ts',
        implementation: 'templates/repository/mongo/IRepositoryImpl.ts',
        index: 'templates/repository/mongo/index.ts',
    },

    [RepositoryTemplatesType.Firestore]: {
        interface: 'templates/repository/firestore/IRepository.ts',
        implementation: 'templates/repository/firestore/IRepositoryImpl.ts',
        index: 'templates/repository/firestore/index.ts',
    },

    [RepositoryTemplatesType.Http]: {
        interface: 'templates/repository/http/IRepository.ts',
        implementation: 'templates/repository/http/IRepositoryImpl.ts',
        index: 'templates/repository/http/index.ts',
    }


}
