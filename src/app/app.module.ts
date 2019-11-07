import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddComponent } from './components/pages/add/add.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
    ContactItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
