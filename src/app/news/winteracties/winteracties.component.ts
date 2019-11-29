import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'winteracties',
  templateUrl: './winteracties.component.html',
  moduleId: module.id
})
export class WinteractiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onDrawerButtonTap(): void {
  const sideDrawer = <RadSideDrawer>app.getRootView();
  sideDrawer.showDrawer();
}

}
