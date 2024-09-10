import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import {UsaModuleModule} from '../../src/app/usa-module/usa-module.module'
import { IndiaModuleModule } from './india-module/india-module.module';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    USAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsaModuleModule,
    IndiaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
