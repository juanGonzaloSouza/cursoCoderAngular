import { Component } from '@angular/core';
import { CartelDeEntradaService } from 'src/app/services/cartel-de-entrada.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-juan',
  templateUrl: './cliente-juan.component.html',
  styleUrls: ['./cliente-juan.component.scss']
})

export class ClienteJuanComponent{
    obsSubscription: Subscription;
    constructor(public CartelDeEntradaService: CartelDeEntradaService) {
      this.obsSubscription = this.CartelDeEntradaService.avisos$.subscribe(console.log)
      this.ngOnDestroy()
    }

    ngOnDestroy() :void {
      this.obsSubscription.unsubscribe()
      console.log("METODO ONDESTROY: se destruyo observable")
    }
   //remueve la subscricion al subject con ondestroy
}
