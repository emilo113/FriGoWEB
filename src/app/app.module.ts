import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
