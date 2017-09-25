import { Component, OnInit } from '@angular/core';
// import {TreeModule, TreeNode} from "angular-tree-component"
import { PAGES_MENU } from "../pages.menu"
import * as $ from 'jquery';
import { Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // nodes: any[];
  menus: any[];
  activeItem: Object;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.nodes = PAGES_MENU;
    this.menus = PAGES_MENU;
  }

  go(item: any){
    this.activeItem = item;
    // this.router.navigate(item.path);
    console.log("abc", this.router);
  }

  // customOptions = {
  //   nodeClass: (node: TreeNode) => {
  //     console.log(node);
  //     return 'node' + node.data.name;
  //   },
  //   animateExpand: true
  // };
}
