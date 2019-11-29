import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from "./news-routing.module";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        NewsRoutingModule
    ],
    declarations: [
        NewsComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewsModule { }
