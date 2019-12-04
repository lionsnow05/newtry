import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import * as SocialShare from "nativescript-social-share";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html'
})
export class AboutusComponent implements OnInit {

  constructor(private _route: RouterExtensions) { }

  ngOnInit() {
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

onTap(_route: String): void{
    this._route.navigate([_route]);
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/over-ons/", "4bikes overons", "Share");
}
}
