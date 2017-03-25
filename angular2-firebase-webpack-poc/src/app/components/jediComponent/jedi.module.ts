import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JediComponent } from "./jedi.component";
import { jediRouting } from "./jedis.routing";

@NgModule({
    declarations: [JediComponent],
    imports: [CommonModule, jediRouting]
})
export class JediModule {
  
}