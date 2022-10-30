//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleHomeComponent } from './components/example/example-home.component';
import { ListSearchComponent } from './components/example/list-search/list-search.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/sandbox/item-list/item-list.component';
import { StudentComponent } from './components/sandbox/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'example/home', component: ExampleHomeComponent },
  { path: 'example/list-search', component: ListSearchComponent },
  { path: 'sandbox/home', component: StudentComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
