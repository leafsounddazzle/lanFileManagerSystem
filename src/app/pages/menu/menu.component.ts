import { Component, OnInit } from '@angular/core';
import {TreeModule, TreeNode} from "angular-tree-component"
import { PAGES_MENU } from "../pages.menu"
import * as $ from 'jquery';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  nodes: any[];

  constructor() { }

  ngOnInit() {
    this.nodes = PAGES_MENU;
  }

  go($event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  customOptions = {
    nodeClass: (node: TreeNode) => {
      // console.log(node);
      // return 'node' + node.data.name;
    },
    animateExpand: true,
    // animateSpeed: 30
    // animateAcceleration: 600
  };

  // onEvent = ($event) => {
  //   console.log($event);
  // }

  onActive = ($event) => {
    console.log("active!");
    console.log($event);
  };

  onFocus = ($event) => {
    console.log("focus!");
    console.log($event);
  }
}
