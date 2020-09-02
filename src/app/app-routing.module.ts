import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { MatTableComponent } from './works/mat-table/mat-table.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { ChatComponent } from './works/chat/chat.component';
import { ChatAdminComponent } from './works/chat-admin/chat-admin.component';
import { AuthGuard } from './shared/guards/auth.guard';



const routes: Routes = [
  {path:'',  pathMatch: 'full', redirectTo: 'works'},
  {path:'works', component: WorksComponent, children:[
    {path:'matTable', component:MatTableComponent},
    {path:'phone', component:PhonebookComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'admin-chat', component: ChatAdminComponent, canActivate: [AuthGuard] }
  ]},
  {path: '' , component: WorksComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
