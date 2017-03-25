import { Routes, RouterModule } from "@angular/router";
import { JediComponent } from "./jedi.component";

const JEDI_ROUTES: Routes = [
    { path: '', component: JediComponent }
];
export const jediRouting = RouterModule.forChild(JEDI_ROUTES);