import { IRepository } from "./IRepository";
import * as admin from 'firebase-admin'

export class IRepositoryImplFirestore implements IRepository {

    private _ref = admin.firestore().collection(COLLECTION_NAME);

    constructor() {

    }

}