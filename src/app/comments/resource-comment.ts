import {FirebaseDataModel} from '../model/list/firebase-data-model';

export class ResourceComment extends FirebaseDataModel {
    authorId: number = -1;
    content: string;
    date: string;
}
