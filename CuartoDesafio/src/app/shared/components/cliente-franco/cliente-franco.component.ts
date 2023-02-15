import { Component } from '@angular/core';
import { CartelDeEntradaService } from 'src/app/services/cartel-de-entrada.service';

@Component({
  selector: 'app-cliente-franco',
  templateUrl: './cliente-franco.component.html',
  styleUrls: ['./cliente-franco.component.scss']
})
export class ClienteFrancoComponent {
  constructor(public CartelDeEntradaService: CartelDeEntradaService) {
    this.CartelDeEntradaService.avisos$.subscribe(console.log)
  }
}
