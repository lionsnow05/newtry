import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { WinteractiesComponent } from "./winteracties.component";

const routes: Routes = [
    { path: "", component: WinteractiesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WinteractiesRoutingModule { }
