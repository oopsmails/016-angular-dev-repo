import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFixedComponent } from './common/navbar-fixed/navbar-fixed.component';
import { ChildComponent } from './components/home/emittest/child/child.component';
import { FormsModule } from '@angular/forms';
import { LoadingStencilModule } from './common/loading-stencil/loading-stencil.module';
import { TranslationTestComponent } from './components/example/translation-test/translation-test.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ItemListComponent } from './components/sandbox/item-list/item-list.component';
import { HomeComponent } from './components/home/home.component';
import { ExampleHomeComponent } from './components/example/example-home.component';
import { ListSearchComponent } from './components/example/list-search/list-search.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NavbarFixedComponent,
    HomeComponent,
    ExampleHomeComponent,
    ListSearchComponent,
    ItemListComponent,
    TranslationTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,

    LoadingStencilModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
