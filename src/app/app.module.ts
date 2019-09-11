import "reflect-metadata";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
