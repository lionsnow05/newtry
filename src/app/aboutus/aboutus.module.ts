import { BicycleComponent } from "../bicycle/bicycle.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,

    ],
    declarations: [
        BicycleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutusModule { }
