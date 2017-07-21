import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { routing }       from './pages.routing';
import { Pages } from './pages.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    FlexLayoutModule
  ],
  declarations: [Pages, MenuComponent]
})
export class PagesModule { }
