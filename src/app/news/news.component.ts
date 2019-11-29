import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  moduleId: module.id
})
export class NewsComponent implements OnInit {

  constructor(private _changeDetectionRef: ChangeDetectorRef, private _route: RouterExtensions, public router
    : Router) { }

  ngOnInit() {
  }
  onItemTap(_route: String): void{
    this._route.navigate([_route]);

}
onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
