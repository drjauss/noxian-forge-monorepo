import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTypesFacadeService } from './card-types.facade.service';
import { CardsFacadeService } from './cards.facade.service';
import { DecksFacadeService } from './decks.facade.service';
import { GuidesFacadeService } from './guides.facade.service';
import { KeywordsFacadeService } from './keywords.facade.service';
import { LocalesFacadeService } from './locales.facade.service';
import { RaritiesFacadeService } from './rarities.facade.service';
import { RegionsFacadeService } from './regions.facade.service';
import { ReviewsFacadeService } from './reviews.facade.service';
import { SetsFacadeService } from './sets.facade.service';
import { SpellSpeedsFacadeService } from './spell-speeds.facade.service';
import { VocabTermsFacadeService } from './vocab-terms.facade.service';

@NgModule({
  providers: [
    CardTypesFacadeService,
    CardsFacadeService,
    DecksFacadeService,
    GuidesFacadeService,
    KeywordsFacadeService,
    LocalesFacadeService,
    RaritiesFacadeService,
    RegionsFacadeService,
    ReviewsFacadeService,
    SetsFacadeService,
    SpellSpeedsFacadeService,
    VocabTermsFacadeService,
  ],
})
export class FacadesModule {}
