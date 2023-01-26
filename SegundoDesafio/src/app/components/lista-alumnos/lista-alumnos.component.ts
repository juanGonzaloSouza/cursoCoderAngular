import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/model/alumno-model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit {

  public alumnos: AlumnoModel[] = [

    new AlumnoModel('Hernesto','Girobeltor','Biomecanica',new Date(2022,10,23), true),
    new AlumnoModel('Girobeltor','Alcornoque','Literatura',new Date(2022,10,25), true),
    new AlumnoModel('Hernesto','Orca','Biologia',new Date(2022,11,23), false),
    new AlumnoModel('Orca','Girobeltor','Matematica',new Date(2022,11,21), false),
    new AlumnoModel('Alcornoque','Orca','Biologia',new Date(2022,10,24), true),
    new AlumnoModel('Hernesto','Alcornoque','Futbol',new Date(2022,11,11), false)

  ];

  constructor() {}

  ngOnInit(): void {}
}