import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
    <div class="additional-bg"></div>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class App {
  isMenuCollapsed: boolean = false;
  title = 'app';
}
