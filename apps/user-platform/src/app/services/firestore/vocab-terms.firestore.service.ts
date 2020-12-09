import { Injectable } from '@angular/core';
import {
  Action,
  AngularFirestore,
  DocumentChangeAction,
  DocumentReference,
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VocabTermsFirestoreService {
  private readonly collectionName = 'vocabTerms';

  constructor(private readonly firestore: AngularFirestore) {}

  public createVocabTerm(data): Promise<DocumentReference<unknown>> {
    return this.firestore.collection(this.collectionName).add(data);
  }

  public getVocabTerm(
    documentId: string
  ): Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .snapshotChanges();
  }

  public getVocabTerms(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public updateVocabTerm(documentId: string, data): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .set(data);
  }
}
