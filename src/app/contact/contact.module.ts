import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContactModule { }
