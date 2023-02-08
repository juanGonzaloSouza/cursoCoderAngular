import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './files/components/menu/menu.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MaterialModule } from './files/modules/modulematerial';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentModalComponent } from './files/components/student-modal/student-modal.component';
import { FooterComponent } from './files/components/footer/footer.component';
import { Titulosx20Directive } from './files/directive/titulosx20.directive';
import { upperCase } from './files/pipe/uppercase';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
    StudentsPageComponent,
    StudentModalComponent,
    FooterComponent,
    Titulosx20Directive,
    upperCase,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
