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
export class GuidesFirestoreService {
  private readonly collectionName = 'guides';

  constructor(private readonly firestore: AngularFirestore) {}

  public createGuide(data): Promise<DocumentReference<unknown>> {
    return this.firestore.collection(this.collectionName).add(data);
  }

  public getGuide(
    documentId: string
  ): Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .snapshotChanges();
  }

  public getGuides(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public updateGuide(documentId: string, data): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .set(data);
  }
}
