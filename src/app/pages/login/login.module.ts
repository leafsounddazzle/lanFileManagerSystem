import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppTranslationModule } from '../../app.translation.module';
// import { NgaModule } from '../../theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
// import { MdButtonModule,MdCardModule,MdIconModule,MdIconRegistry } from '@angular/material';

import { Login } from './login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export class LoginModule { }
