import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { AddRegionComponent } from './components/crud/regions/add-region/add-region.component';
import { UpdateRegionComponent } from './components/crud/regions/update-region/update-region.component';
import { AddDifficultyComponent } from './components/crud/difficulties/add-difficulty/add-difficulty.component';
import { UpdateDifficultyComponent } from './components/crud/difficulties/update-difficulty/update-difficulty.component';
import { AddWalkerComponent } from './components/crud/walkers/add-walker/add-walker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTableComponent } from './components/Reusable/data-table/data-table.component';
import { AddComponent } from './components/Reusable/add/add.component';
import { PaginationComponent } from './components/Reusable/pagination/pagination.component';
import { NavBarComponent } from './components/Reusable/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/Reusable/side-bar/side-bar.component';
import { WrapperComponent } from './components/Reusable/wrapper/wrapper.component';
import { ContentComponent } from './components/Reusable/content/content.component';
import { FotterComponent } from './components/Reusable/fotter/fotter.component';
import { MainContentComponent } from './components/Reusable/main-content/main-content.component';
import { GenericDashboardComponent } from './components/generic-dashboard/generic-dashboard.component';
import { RegionComponent } from './components/Page/region/region.component';
import { WalkComponent } from './components/Page/walk/walk.component';
import { DataTableHeaderComponent } from './components/Reusable/data-table-header/data-table-header.component';
import { WalkerComponent } from './components/Page/walker/walker.component';
import { DeleterComponent } from './components/Reusable/deleter/deleter.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TableDataComponent,
    AddRegionComponent,
    UpdateRegionComponent,
    AddDifficultyComponent,
    UpdateDifficultyComponent,
    AddWalkerComponent,
    NavbarComponent,
    DataTableComponent,
    AddComponent,
    PaginationComponent,
    NavBarComponent,
    SideBarComponent,
    WrapperComponent,
    ContentComponent,
    FotterComponent,
    MainContentComponent,
    GenericDashboardComponent,
    RegionComponent,
    WalkComponent,
    DataTableHeaderComponent,
    WalkerComponent,
    DeleterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:tokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
