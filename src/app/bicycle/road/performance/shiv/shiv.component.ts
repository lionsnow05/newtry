import { Component, OnInit } from '@angular/core';
import * as SocialShare from "nativescript-social-share";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'shiv',
  templateUrl: './shiv.component.html'
})
export class ShivComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }
  onBack(): void {
    this.router.back();
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/product-category/road/performance/shiv/", "4bikes shiv", "Share");
}
}
