import { AfterViewInit, OnInit, ChangeDetectorRef, ViewChild, Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationEnd, Router } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import * as app from "tns-core-modules/application";
import { filter } from "rxjs/operators";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    moduleId: module.id
})
export class AppComponent implements AfterViewInit, OnInit {
    _activatedUrl: string;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private _route: RouterExtensions, public router
        : Router) {

        }
        @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;
        private drawer: RadSideDrawer;

        ngAfterViewInit(){
            this.drawer = this.drawerComponent.sideDrawer;
            this._changeDetectionRef.detectChanges();
        }
        ngOnInit(){
            this._activatedUrl = "/home";

            this.router.events
            .pipe(filter((event: any)=> event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd)=> this._activatedUrl = event.urlAfterRedirects);
        }
             isComponentSelected(url: string): boolean {
                   return this._activatedUrl == url;
               }
               onNavItemTap(_route: String): void{
                   this._route.navigate([_route]);
                   const sideDrawer = <RadSideDrawer>app.getRootView();
                   sideDrawer.closeDrawer();
               }


            }
