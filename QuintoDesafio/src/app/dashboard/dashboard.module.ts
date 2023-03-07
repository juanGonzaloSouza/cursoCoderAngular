import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { GokuComponent } from './pages/goku/goku.component';
import { VegetaComponent } from './pages/vegeta/vegeta.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    SidenavComponent,
    GokuComponent,
    VegetaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})

export class DashboardModule { }
