import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { HomeModule } from "./home/home.module";

import { WinteractiesComponent } from "./news/winteracties/winteracties.component";
import { NewsComponent } from "./news/news.component";
import { BicycleComponent } from './bicycle/bicycle.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RoadComponent } from "./bicycle/road/road.component";
import { PerformanceComponent } from "./bicycle/road/performance/performance.component";
import { ShivComponent } from "./bicycle/road/performance/shiv/shiv.component";

@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptUISideDrawerModule,
      HomeModule
   ],
   declarations: [
      AppComponent,
      NewsComponent,
      WinteractiesComponent,
      BicycleComponent,
      AboutusComponent,
      ContactComponent,
      RoadComponent,
      PerformanceComponent,
      ShivComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
