import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ShivComponent } from "./shiv.component";
import { ShivRoutingModule } from "./shiv-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        ShivRoutingModule
    ],
    declarations: [
        ShivComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ShivModule { }
