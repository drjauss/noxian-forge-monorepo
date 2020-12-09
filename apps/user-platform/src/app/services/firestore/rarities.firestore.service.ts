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
export class RaritiesFirestoreService {
  private readonly collectionName = 'rarities';

  constructor(private readonly firestore: AngularFirestore) {}

  public createRarity(data): Promise<DocumentReference<unknown>> {
    return this.firestore.collection(this.collectionName).add(data);
  }

  public getRarity(
    documentId: string
  ): Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .snapshotChanges();
  }

  public getRarities(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public updateRarity(documentId: string, data): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .set(data);
  }
}
