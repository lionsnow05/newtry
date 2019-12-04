import { Component, OnInit } from "@angular/core";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as SocialShare from "nativescript-social-share";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})
export class HomeComponent implements OnInit {


    constructor( private _route: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    onItemTap(_route: String): void{
        this._route.navigate([_route]);

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public shareUrl() {
        SocialShare.shareUrl("https://www.4bikes.be/", "4bikes", "Share");
    }

}
