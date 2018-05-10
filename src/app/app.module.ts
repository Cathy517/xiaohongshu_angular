import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import axios from 'axios';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HeaderComponent } from './header/header.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AttentionComponent } from './attention/attention.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component';


let rootRouterModule = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NoteListComponent,
    HeaderComponent,
    PurchaseComponent,
    AttentionComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    rootRouterModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
})
export class AppModule { }
