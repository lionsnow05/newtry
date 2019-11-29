import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router/router.module";
import { NgModule } from "@angular/core";
import { AboutusComponent } from "./aboutus.component";

const routes: Routes = [
    { path: "", component: AboutusComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AboutusRoutingModule { }
