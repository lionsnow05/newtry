import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/contact/", "4bikes contact", "Share");
}

}
