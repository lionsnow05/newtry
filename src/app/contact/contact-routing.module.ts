import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", component: ContactComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ContactRoutingModule { }
