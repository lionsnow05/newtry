import { BicycleRoutingModule } from "./bicycle-routing.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { BicycleComponent } from "./bicycle.component";
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        BicycleRoutingModule
    ],
    declarations: [
        BicycleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BicycleModule { }
