import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { RoadRoutingModule } from "./road-routing.module";
import { RoadComponent } from "./road.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        RoadRoutingModule
    ],
    declarations: [
        RoadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RoadModule { }
