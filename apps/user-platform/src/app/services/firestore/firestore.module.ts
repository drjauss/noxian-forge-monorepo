import { NgModule } from '@angular/core';
import { CardTypesFirestoreService } from './card-types.firestore.service';
import { CardsFirestoreService } from './cards.firestore.service';
import { DecksFirestoreService } from './decks.firestore.service';
import { GuidesFirestoreService } from './guides.firestore.service';
import { KeywordsFirestoreService } from './keywords.firestore.service';
import { LocalesFirestoreService } from './locales.firestore.service';
import { RaritiesFirestoreService } from './rarities.firestore.service';
import { RegionsFirestoreService } from './regions.firestore.service';
import { ReviewsFirestoreService } from './reviews.firestore.service';
import { SetsFirestoreService } from './sets.firestore.service';
import { SpellSpeedsFirestoreService } from './spell-speeds.firestore.service';
import { VocabTermsFirestoreService } from './vocab-terms.firestore.service';

@NgModule({
  providers: [
    CardTypesFirestoreService,
    CardsFirestoreService,
    DecksFirestoreService,
    GuidesFirestoreService,
    KeywordsFirestoreService,
    LocalesFirestoreService,
    RaritiesFirestoreService,
    RegionsFirestoreService,
    ReviewsFirestoreService,
    SetsFirestoreService,
    SpellSpeedsFirestoreService,
    VocabTermsFirestoreService,
  ],
})
export class FirestoreModule {}
