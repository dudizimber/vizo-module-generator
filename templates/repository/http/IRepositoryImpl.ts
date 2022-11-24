import { IRepository } from "./IRepository";


export class IRepositoryImplHttp implements IRepository {

    constructor(
        private _httpClient: HttpClient,
        private _baseUrl: string,
    ) {

    }

}