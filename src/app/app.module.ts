import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { MdButtonModule,MdCardModule,MdIconModule } from '@angular/material';

import { App } from './app.component';
import { AppState,InternalStateType } from './app.service';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

const APP_PROVIDERS = [
  AppState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    PagesModule,
    routing
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [App]
})
export class AppModule {
  constructor(public appState: AppState) {
  }
}
