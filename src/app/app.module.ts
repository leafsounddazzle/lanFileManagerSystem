import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { MdButtonModule,MdCardModule,MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { App } from './app.component';
import { AppState,InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

const IMPORT_ITEMS1 = [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule
];

const IMPORT_ITEMS2 = [
  FlexLayoutModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  PagesModule,
  routing
];

@NgModule({
  declarations: [
    App
  ],
  imports: [
    ...IMPORT_ITEMS1,
    ...IMPORT_ITEMS2
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
