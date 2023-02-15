import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteJuanComponent } from './components/cliente-juan/cliente-juan.component';
import { ClienteSebaComponent } from './components/cliente-seba/cliente-seba.component';
import { ClienteFrancoComponent } from './components/cliente-franco/cliente-franco.component';



@NgModule({
  declarations: [
    ClienteJuanComponent,
    ClienteSebaComponent,
    ClienteFrancoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClienteJuanComponent,
    ClienteSebaComponent,
    ClienteFrancoComponent,
  ]
})
export class SharedModule { }
