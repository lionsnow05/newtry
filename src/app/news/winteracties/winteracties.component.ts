import { Component, OnInit } from '@angular/core';
import * as SocialShare from "nativescript-social-share";
import { RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: 'winteracties',
  templateUrl: './winteracties.component.html',
  moduleId: module.id
})
export class WinteractiesComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

onBack(): void {
  this.router.back();
}
public shareUrl() {
    SocialShare.shareUrl("https://www.4bikes.be/nieuws/winteracties/", "4bikes winteracties", "Share");
}
}
