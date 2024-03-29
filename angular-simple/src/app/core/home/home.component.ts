import { stringify } from "@angular/compiler/src/util";
import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subject, combineLatest } from "rxjs";
import { tap, takeWhile, takeUntil, switchMap, map } from "rxjs/operators";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LOADING_STENCIL_ROUTES_URLS } from "src/app/loading-stencil/loading-stencil.constants";

enum TimerResult {
  COMPLETE,
  ABORTED,
  SKIPPED
}

const TRANSLATIONS_FR = require('src/assets/i18n/fr.json');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "Angular";
  title = 'angular-simple';
  result;
  simpleTimer$ = interval(100);
  _notifier: Subject<TimerResult> = new Subject();
  notifier$: Observable<TimerResult> = this._notifier.asObservable();
  showHide;
  isChecked;

  public getScreenWidth: any;
  public getScreenHeight: any;
  browserName = '';
  browserVersion = '';

  navRoutes: any = null;

  faCoffee = faCoffee;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('########### in HomeComponent, TRANSLATIONS_FR = \n' + JSON.stringify(TRANSLATIONS_FR));
    this.navRoutes = LOADING_STENCIL_ROUTES_URLS;

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.browserName = this.detectBrowserName();
    this.browserVersion = this.detectBrowserVersion();
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  startTimer(): Observable<any> {
    const timer$ = this.simpleTimer$.pipe(
      tap((res) => this.result = res),
      takeUntil(this.notifier$)
    );
    return combineLatest(timer$, this.notifier$)
  }

  end() {
    this._notifier.next(TimerResult.ABORTED)
  }

  start() {
    this.startTimer().subscribe(([timer, action]) => {
      this.result = "end:" + timer + " action:" + action
    })
  }

  valueEmittedFromChildComponent: string;

  parentEventHandlerFunction(valueEmitted) {
    this.valueEmittedFromChildComponent = valueEmitted;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  detectBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  detectBrowserVersion() {
    var userAgent = navigator.userAgent, tem,
      matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(matchTest[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (matchTest[1] === 'Chrome') {
      tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = userAgent.match(/version\/(\d+)/i)) != null) matchTest.splice(1, 1, tem[1]);
    return matchTest.join(' ');
  }

}
