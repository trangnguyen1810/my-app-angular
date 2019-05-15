import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/menu.model';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() menus: Menu[] = [];
  @Input() logo: String = '';
  @Input() avatar: String = '';
  @Input() profile: Profile;

  public isShowUserProfile = false;
  constructor() { }

  ngOnInit() {
  }

  public showUserProfileFn () {
      this.isShowUserProfile = !this.isShowUserProfile;
  }

}
