import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing }       from './pages.routing';
import { Pages } from './pages.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing
  ],
  declarations: [Pages]
})
export class PagesModule { }
