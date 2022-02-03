import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingSimpleComponent } from './loading-simple/loading-simple.component';
import { LOADING_STENCIL_ROUTES_URLS, LOADING_STENCIL_ROUTES_URL_ROOT } from './loading-stencil.constants';

const LOADING_STENCIL_ROUTES: Routes = [
  {
    path: LOADING_STENCIL_ROUTES_URL_ROOT,
    component: LoadingSimpleComponent,

    children: [
      {
        path: LOADING_STENCIL_ROUTES_URLS.LOADING_STENCIL_ROUTES_SIMPLE,
        component: LoadingSimpleComponent
      },
      {
        path: 'user',
        component: LoadingSimpleComponent
      },
      {
        path: 'rights',
        component: LoadingSimpleComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(LOADING_STENCIL_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class LoadingStencilRoutingModule { }
