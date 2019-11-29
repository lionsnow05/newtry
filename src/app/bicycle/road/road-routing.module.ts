import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router/router.module";
import { NgModule } from "@angular/core";
import { RoadComponent } from "./road.component";

const routes: Routes = [
    { path: "", component: RoadComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RoadRoutingModule { }
