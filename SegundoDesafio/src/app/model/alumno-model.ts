interface AlumnoContract {
    nombre: string;
    apellido: string;
    carrera: string;
    fechaDeIngreso: Date;
    fechaTardia: boolean;
  
  }
  
  export class AlumnoModel implements AlumnoContract{
  
    nombre: string;
    apellido: string;
    carrera: string;
    fechaDeIngreso: Date;
    fechaTardia: boolean;
  
  
    constructor(nombre: string, apellido: string, carrera: string, fechaDeIngreso: Date, fechaTardia: boolean)
    {
      this.nombre = nombre;
      this.apellido = apellido;
      this.carrera = carrera;
      this.fechaDeIngreso = fechaDeIngreso;
      this.fechaTardia = fechaTardia
    }
  
  }
  