import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LibrosFormComponent } from './components/libros-form/libros-form.component';
import { LibrosListComponent } from './components/libros-list/libros-list.component';
import { NabvarComponent } from './nabvar/nabvar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LibrosFormComponent,
    LibrosListComponent,
    NabvarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
