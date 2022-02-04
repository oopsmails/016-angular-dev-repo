import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import enjson from '../../../../assets/i18n/en.json';
import { HttpLoaderFactory } from '../../../app.module';
import { TranslationTestComponent } from './translation-test.component';

const TRANSLATIONS_EN = require('../../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../../assets/i18n/fr.json');

describe('TranslationTestComponent, test2', () => {
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
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [TranslateService]
    }).compileComponents();

    injector = getTestBed();
    translateService = injector.get(TranslateService);
    console.log('########### in test2, TRANSLATIONS_EN = \n' + JSON.stringify(TRANSLATIONS_EN));
    console.log('########### in test2, enjson = \n' + JSON.stringify(enjson));
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should getTestDescription', () => {
    expect(component).toBeTruthy();
  });

  xit('should calc test', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('en');
    const expected = 'en: test description in en.json, 3 of 5';
    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

});
