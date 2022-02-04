import { Injector } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


import { TranslationTestComponent } from './translation-test.component';

let translations: any = { "TEST_DESCRIPTION": "This is a test, {{ interpolateParams1 }} of {{ interpolateParams2 }}" };

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

it('true is true', () => expect(true).toBe(true));

describe('TranslationTestComponent', () => {
  let component: TranslationTestComponent;
  let fixture: ComponentFixture<TranslationTestComponent>;
  let translateService: TranslateService;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader },
        })

        // TranslateModule.forRoot({ // version 2
        //   loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        // })
      ],
      providers: [
        // TranslateService
      ]
    });
    
    injector = getTestBed();
    translateService = injector.get(TranslateService);
    fixture = TestBed.createComponent(TranslationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [TranslationTestComponent]
  //   })
  //     .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TranslationTestComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should getTestDescription', () => {
    expect(component).toBeTruthy();
  });

  it('should calc test', () => {
    const expected = 'This is a test, 3 of 5';
    translateService.use('en');
    fixture.detectChanges();
    // expect(el.textContent).toContain('This is a test')

    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

  it('should calc test 2, just use Angular TranslateFakeLoader, FakeLoader above is NOT needed!', () => {
    translateService.setTranslation('en', { TEST_DESCRIPTION: 'interpolateParams1 = {{interpolateParams1}} of interpolateParams2 = {{interpolateParams2}}' });
    translateService.use('en');
    fixture.detectChanges();
    const expected = 'interpolateParams1 = 3 of interpolateParams2 = 5';
    let result = component.getTestDescription();
    expect(result).toEqual(expected);
  });

});
