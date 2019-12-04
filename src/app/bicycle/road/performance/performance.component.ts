import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: 'ns-performance',
  templateUrl: './performance.component.html'
})
export class PerformanceComponent implements OnInit {

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
    SocialShare.shareUrl("https://www.4bikes.be/product-category/road/performance/", "4bikes Performance", "Share");
}
}
