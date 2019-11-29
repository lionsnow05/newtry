import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PerformanceComponent } from "./performance.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", component: PerformanceComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PerformanceRoutingModule { }
