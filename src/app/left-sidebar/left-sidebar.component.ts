import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../models/menu.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  @Input() menus: Menu[] = [];

  constructor() { }

  ngOnInit() {
    
  }

}
