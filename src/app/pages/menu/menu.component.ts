import { Component, OnInit } from '@angular/core';
import {TreeModule, TreeNode} from "angular-tree-component"



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  nodes: any[];
  customOptions: object;

  constructor() { }

  ngOnInit() {
    this.nodes = [
      {
        id: 1,
        name: 'root1',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
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
        name: "root3"
      }
    ];
    this.customOptions = {
      nodeClass: (node: TreeNode) => {
        return 'icon-';
      }
    };
  }

  go($event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }
}
