import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { WinteractiesComponent } from "./winteracties.component";
import { WinteractiesRoutingModule } from "./winteracties-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        WinteractiesRoutingModule

    ],
    declarations: [
        WinteractiesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WinteractiesModule { }
