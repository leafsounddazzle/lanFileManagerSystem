import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <!--<main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>-->
    <!--<div class="additional-bg"></div>-->
    <!--<router-outlet></router-outlet>-->
    <!--<button md-button>Click me!</button>-->
  <!--</main>-->
  <main class="app-main">
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class App {
  isMenuCollapsed: boolean = false;
  title = 'app';
}

