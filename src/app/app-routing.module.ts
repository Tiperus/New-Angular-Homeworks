import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { MatTableComponent } from './works/mat-table/mat-table.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';


const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: 'works'},
  {path:'works', component: WorksComponent, children:[
    {path:'matTable', component:MatTableComponent},
    {path:'phone', component:PhonebookComponent}
  ]},
  {path: '' , component: WorksComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
