import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-test',
  templateUrl: './translation-test.component.html',
  styleUrls: ['./translation-test.component.scss']
})
export class TranslationTestComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

  getTestDescription() {
      let result = this.translateService.instant('TEST_DESCRIPTION', { interpolateParams1: 3, interpolateParams2: 5 });
      // let result = this.translateService.instant('TEST_DESCRIPTION');
      return result;
  }

}
