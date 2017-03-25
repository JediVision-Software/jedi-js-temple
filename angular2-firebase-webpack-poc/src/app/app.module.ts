import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./components/homeComponent/home.component"
import { JediService } from "./service/jedi.service";

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, HttpModule, routing],
    bootstrap: [AppComponent],
    providers: [JediService]
})
export class AppModule {}