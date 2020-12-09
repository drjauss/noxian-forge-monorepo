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
export class SpellSpeedsFirestoreService {
  private readonly collectionName = 'spellSpeeds';

  constructor(private readonly firestore: AngularFirestore) {}

  public createSpellSpeed(data): Promise<DocumentReference<unknown>> {
    return this.firestore.collection(this.collectionName).add(data);
  }

  public getSpellSpeed(
    documentId: string
  ): Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .snapshotChanges();
  }

  public getSpellSpeeds(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public updateSpellSpeed(documentId: string, data): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .set(data);
  }
}
