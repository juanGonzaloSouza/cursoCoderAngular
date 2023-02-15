import { Component } from '@angular/core';
import { CartelDeEntradaService } from 'src/app/services/cartel-de-entrada.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cliente-seba',
  templateUrl: './cliente-seba.component.html',
  styleUrls: ['./cliente-seba.component.scss']
})
export class ClienteSebaComponent {
  constructor(public CartelDeEntradaService: CartelDeEntradaService) {
    this.CartelDeEntradaService.avisos$
    .pipe(
      map(() => 'mapinnn')
    )
    .subscribe((value) => {
      console.log(`METODO MAP: ${value}`)
    })
}}
