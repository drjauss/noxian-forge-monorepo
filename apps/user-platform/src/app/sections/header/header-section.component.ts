import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalRoutes } from '../../declarations/enums/routing/global-routes.enum';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent implements OnInit {
  globalRoutes = GlobalRoutes;
  currentRoute: string;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }
}
