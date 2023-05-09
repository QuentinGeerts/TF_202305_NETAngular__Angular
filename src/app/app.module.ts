import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Exo01Component,
    Demo02Component,
    Exo02Component,
    Demo03Component,
    Exo03Component,
    Demo04Component,
    Demo05Component,
    DemosComponent,
    FourofourComponent,
    NavbarComponent,
    Exo05Component,
    ExercicesComponent,
    Demo06Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Permet d'injecter la langue FR partout dans l'application
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
