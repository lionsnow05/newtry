import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: 'road',
  templateUrl: './road.component.html'

})
export class RoadComponent implements OnInit {

  constructor(private _route: RouterExtensions, private router: RouterExtensions) { }

  ngOnInit() {
  }
  onTap(_route: String): void{
    this._route.navigate([_route]);

}

onBack(): void {
    this.router.back();
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/product-category/road/", "4bikes road", "Share");
}
}
