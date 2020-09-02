import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksComponent } from './works/works.component';
import { MatTableComponent } from './works/mat-table/mat-table.component';
import { PhonebookComponent } from './works/phonebook/phonebook.component';
import { SearchPipe } from './shared/pipe/search.pipe';
import { ChatComponent } from './works/chat/chat.component';
import { ChatAdminComponent } from './works/chat-admin/chat-admin.component';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    MatTableComponent,
    PhonebookComponent,
    SearchPipe,
    ChatComponent,
    ChatAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
