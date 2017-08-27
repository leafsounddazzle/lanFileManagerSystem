import { Component, OnInit } from '@angular/core';
import {TreeModule, TreeNode} from "angular-tree-component"
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
    this.nodes = [
      {
        id: 1,
        name: '文件',
        alias: 'file',
        icon: 'folder',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: '最近访问',
        alias: 'recents',
        icon: 'history',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      },
      {
        id: 8,
        name: '共享',
        alias: "share",
        icon: "share"
      },
      {
        id: 9,
        name: '关于',
        alias: "about",
        icon: "help"
      }
    ];
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
