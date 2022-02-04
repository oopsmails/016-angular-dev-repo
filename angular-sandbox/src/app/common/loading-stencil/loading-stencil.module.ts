import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoadingStencilRoutingModule } from './loading-stencil.routes';
import { LoadingSimpleComponent } from './loading-simple/loading-simple.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingStencilRoutingModule } from './loading-stencil.routes';
// import { LOADING_STENCIL_ROUTES } from './loading-stencil.routes';
// import { Routes } from '../loading-stencil/loading-stencil.routes';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // LoadingStencilRoutes
    // Routes,
    LoadingStencilRoutingModule
  ],
  declarations: [
    LoadingSimpleComponent
  ]
})
export class LoadingStencilModule { }
