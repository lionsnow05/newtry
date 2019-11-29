import { NgModule, Component } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { WinteractiesComponent } from "./news/winteracties/winteracties.component";
import { NewsComponent } from "./news/news.component";
import { BicycleComponent } from "./bicycle/bicycle.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { RoadComponent } from "./bicycle/road/road.component";
import { PerformanceComponent } from "./bicycle/road/performance/performance.component";
import { ShivComponent } from "./bicycle/road/performance/shiv/shiv.component";




const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "bicycle", component: BicycleComponent,
    children: [
        { path: "road", component: RoadComponent},
        { path: "road/performance", component: PerformanceComponent},
        { path: "road/performance/shiv", component: ShivComponent}
    ]
},

    { path: "aboutus", component: AboutusComponent},
    { path: "contact", component: ContactComponent},
    { path: "news", component: NewsComponent,
    children: [
        { path: "winteracties", component: WinteractiesComponent }
    ]

}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
