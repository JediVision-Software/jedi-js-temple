import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/homeComponent/home.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jedi', loadChildren: './components/jediComponent/jedi.module#JediModule'}
];
export const routing = RouterModule.forRoot(ROUTES);