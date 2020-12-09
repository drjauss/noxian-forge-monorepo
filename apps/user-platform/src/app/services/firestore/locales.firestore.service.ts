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
export class LocalesFirestoreService {
  private readonly collectionName = 'locales';

  constructor(private readonly firestore: AngularFirestore) {}

  public createLocale(data): Promise<DocumentReference<unknown>> {
    return this.firestore.collection(this.collectionName).add(data);
  }

  public getLocale(
    documentId: string
  ): Observable<Action<DocumentSnapshot<unknown>>> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .snapshotChanges();
  }

  public getLocales(): Observable<DocumentChangeAction<unknown>[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  public updateLocale(documentId: string, data): Promise<void> {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .set(data);
  }
}
