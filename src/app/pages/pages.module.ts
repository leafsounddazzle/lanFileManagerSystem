import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { routing }       from './pages.routing';
import { Pages } from './pages.component';
import { MenuComponent } from './menu/menu.component';
import { TreeModule } from "angular-tree-component"


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    TreeModule
  ],
  declarations: [Pages, MenuComponent]
})
export class PagesModule { }
