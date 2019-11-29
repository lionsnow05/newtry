import { Component, OnInit } from "@angular/core";
import { RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    moduleId: module.id
})
export class HomeComponent implements OnInit {
    bikes: { name: string, description: string, imageSrc: string }[] = [
        { name:"ROAD", description:"Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         imageSrc:"https://www.4bikes.be/wp-content/uploads/2019/01/home-banner.jpg"},
         { name:"MOUNTAIN", description:"Lorem ipsum dolor sit, consectetur adipisicing, tempor incididunt ut labore et dolore aliqua.",
         imageSrc:"https://www.4bikes.be/wp-content/uploads/2019/05/4bikes-specialized-mountain.png"},
         { name: "ELEKTRISCH", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, tempor incididunt ut labore et dolore magna aliqua.",
         imageSrc:"https://image.jimcdn.com/app/cms/image/transf/none/path/s300297a0d2b9d64c/image/i64271a433013eada/version/1553625106/image.jpg"},
         { name: "FITNESS", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,tempor incididunt ut labore et dolore magna aliqua.",
         imageSrc:"https://www.sportler.at/fileadmin/user_upload/redakteure/artikel/kategorien/fitnessundtour.jpg.pagespeed.ce.uy8-1ag9ya.jpg"}
    ];

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
