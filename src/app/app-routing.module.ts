import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { UpdateDifficultyComponent } from './components/crud/difficulties/update-difficulty/update-difficulty.component';
import { AddRegionComponent } from './components/crud/regions/add-region/add-region.component';
import { UpdateRegionComponent } from './components/crud/regions/update-region/update-region.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperComponent } from './components/Reusable/wrapper/wrapper.component';
import { GenericDashboardComponent } from './components/generic-dashboard/generic-dashboard.component';
import { MainContentComponent } from './components/Reusable/main-content/main-content.component';
import { ContentComponent } from './components/Reusable/content/content.component';
import { RegionComponent } from './components/Page/region/region.component';
import { WalkerComponent } from './components/Page/walker/walker.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "wrapper", component: WrapperComponent,
  children:[
    {path:"region", component:RegionComponent, },
    {path:"walker", component:WalkerComponent, }

  ]
},
  { path:'gDash', component:GenericDashboardComponent,children:[
    {path:'region', component:RegionComponent},
  ] },

  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: 'getall', component: TableDataComponent },
      { path: 'region', component: AddRegionComponent },
      //{path:'update/:id', component:AddRegionComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
