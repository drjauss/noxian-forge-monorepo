import { Component } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Guide } from '../../models/entities/guide.model';
import { GuidesFacadeService } from '../../services/facades/guides.facade.service';

@Component({
  selector: 'app-guides-grid',
  templateUrl: './guides-grid.component.html',
  styleUrls: ['./guides-grid.component.scss'],
})
export class GuidesGridComponent {
  guides$: Observable<Array<Guide>>;

  constructor(private readonly guidesFacadeService: GuidesFacadeService) {
    this.guides$ = this.guidesFacadeService.getGuides();
  }
}
