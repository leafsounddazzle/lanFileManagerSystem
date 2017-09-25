import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']

})
export class Pages {
  constructor() { }

  ngOnInit() {

  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }

}
