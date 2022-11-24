import { IRepository } from "./IRepository";


export class IRepositoryImplMongo implements IRepository {

    collection = this.database.collection(COLLECTION_NAME);

    constructor(
        private database: any
    ) {

    }

}