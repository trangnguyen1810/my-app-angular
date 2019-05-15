import { Component, OnInit } from '@angular/core';

import { Menu } from './models/menu.model';
import { Profile } from './models/profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public leftSidebars: Menu[];

  public headerMenus: Menu[];
  public avatar = '';
  public logo = '';
  public profile: Profile;

  ngOnInit() {
    this.leftSidebars = [{
      label: 'Dashboard',
      url: '#',
    }, {
      label: 'About',
      url: '#',
    }, {
      label: 'Contact Us',
      url: '#',
    }];

    this.headerMenus = [{
      label: 'Facebook',
      url: 'https://www.facebook.com/'
    }, {
      label: 'Google',
      url: 'https://www.google.com/'
    }];

    this.avatar = '../../assets/images/avatar.png';
    this.logo = '../../assets/images/logo.png';

    this.profile = {
      Name: 'Trang Nguyen',
      Email: 'nguyentrang181090@gmail.com',
      Phone: '09337353573'
    };
  }
}
