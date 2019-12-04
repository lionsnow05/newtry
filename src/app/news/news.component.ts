import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from '@angular/router';
import * as SocialShare from "nativescript-social-share";


@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  moduleId: module.id
})
export class NewsComponent implements OnInit {

  constructor( private _route: RouterExtensions) { }

  ngOnInit() {
  }
  onTap(_route: String): void{
    this._route.navigate([_route]);

}
onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/nieuws/", "4bikes", "Share");
}
}
