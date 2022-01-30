import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ProfileComponent } from "./profile/profile.component";


const routes : Routes = [
  {path: "",component : ProfileComponent},
  {path: "about",component : AboutComponent}
]

export const appRouterProviders : any = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
