import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartelDeEntradaService {
    private avisos = new Subject<string>()
    private lastV:string = 'pase'
    public avisos$ = this.avisos.asObservable() //TODO Convierte el subject en un observable !!!
  constructor() {
    this.avisos.subscribe((value) => (this.lastV = value))
    interval(1000).subscribe(() => this.lastV === 'pase' ? this.avisos.next('cerrado') : this.avisos.next('pase'))
  }
  // this.obsSubscription
  //   map((this.obsSubscription: string) => "Espere")
  // )
}
