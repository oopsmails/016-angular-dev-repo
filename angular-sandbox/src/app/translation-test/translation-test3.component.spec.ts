import { Injector } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import enjson from '../../assets/i18n/en.json';
import { TranslationTestComponent } from './translation-test.component';

const TRANSLATIONS_EN = require('../../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../../assets/i18n/fr.json');

class MockTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if ('FR' === lang) {
      return of(TRANSLATIONS_FR);
    }
    return of(TRANSLATIONS_EN);
  }
}

describe('TranslationTestComponent, test3', () => {
  let component: TranslationTestComponent;
  let fixture: ComponentFixture<TranslationTestComponent>;
  let translateService: TranslateService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslationTestComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        })
      ],
      providers: [TranslateService]
    }).compileComponents();

    injector = getTestBed();
    translateService = injector.get(TranslateService);
    console.log('########### in test3, TRANSLATIONS_EN = \n' + JSON.stringify(TRANSLATIONS_EN));
    console.log('########### in test3, enjson = \n' + JSON.stringify(enjson));
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should getTestDescription', () => {
    expect(component).toBeTruthy();
  });

  it('should calc test from EN', () => {
    translateService.use('en');
    fixture.detectChanges();
    const expected = 'en: test description in en.json, 3 of 5';
    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

  it('should calc test from FR', () => {
    fixture = TestBed.createComponent(TranslationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    translateService.use('FR'); // cannot be fr
    fixture.detectChanges();
    const expected = 'fr: test description in fr.json, 3 of 5';
    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

});
