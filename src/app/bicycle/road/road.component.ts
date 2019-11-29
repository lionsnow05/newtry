import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'road',
  templateUrl: './road.component.html'

})
export class RoadComponent implements OnInit {

  constructor(private _route: RouterExtensions) { }

  ngOnInit() {
  }
  onTap(_route: String): void{
    this._route.navigate([_route]);

}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
