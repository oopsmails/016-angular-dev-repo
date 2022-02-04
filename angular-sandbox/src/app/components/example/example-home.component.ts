import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { EXAMPLE_ROUTES_URLS } from './example.constants';

enum TimerResult {
  COMPLETE,
  ABORTED,
  SKIPPED
}

const TRANSLATIONS_FR = require('src/assets/i18n/fr.json');

@Component({
  selector: 'home',
  templateUrl: './example-home.component.html',
  styleUrls: ['./example-home.component.scss']
})
export class ExampleHomeComponent implements OnInit {
  title = 'Example Home';
  navRoutes: any = null;
  faCoffee = faCoffee;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.navRoutes = EXAMPLE_ROUTES_URLS;
  }

  navToPage(page) {
    this.router.navigateByUrl(page);
  }

}
