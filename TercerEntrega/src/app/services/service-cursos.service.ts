import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, take } from 'rxjs';
import { CursoModel } from '../models/cursosmodel';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  public cursos$: Observable<CursoModel[]>;
  private cursos = new BehaviorSubject<CursoModel[]>([]);

  constructor() {
    this.cursos$ = this.cursos.asObservable();
    this.getCursos().subscribe(curso => {
      this.cursos.next(curso);
    });
  }

  eliminarCurso(curso: CursoModel) {
    const newLista = this.cursos.getValue().filter( c => c.nombre !== curso.nombre);
    this.cursos.next(newLista);
  }

  agregarCurso(nuevoCurso: Omit<CursoModel, 'id'>): void {
    this.cursos.pipe(take(1)).subscribe((cursos) => {
      const lastId = cursos[cursos.length - 1]?.id || 0;
      this.cursos.next([
        ...cursos,
        new CursoModel(lastId + 1, nuevoCurso.nombre, nuevoCurso.categoria, nuevoCurso.imagenURL, nuevoCurso.descripcion)
      ])
    })
  }

  editarCurso(id: number, data: Partial<CursoModel>): void {
    this.cursos.pipe(take(1)).subscribe((cursos) => {
      this.cursos.next(
        cursos.map(
          (curs) => curs.id === id
            ? new CursoModel(
              curs.id,
              data.nombre || curs.nombre,
              data.categoria || curs.categoria,
              data.imagenURL || curs.imagenURL,
              data.descripcion || curs.descripcion
            )
            : curs
        )
      )
    })
  }

  getCursos(): Observable<CursoModel[]> {
    return of([
      { id: 1, nombre: 'Javascript', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', descripcion: 'El lenguaje mas famoso de programación WEB' },
      { id: 2, nombre: 'Diseño UX/UI', categoria: 'Diseño', imagenURL: 'https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&fit=max&w=1200', descripcion: 'El curso por excelencia para diseñadores.' },
      { id: 3, nombre: 'Python', categoria: 'Programacion', imagenURL: 'https://www.armadilloamarillo.com/wp-content/uploads/Python-Symbol-300x169.png', descripcion: 'El lenguaje mas famoso para DATA y BackEND' },
      { id: 3, nombre: 'HTML', categoria: 'Programacion', imagenURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU', descripcion: 'Lenguaje de escritura par a paginas web' },
      { id: 5, nombre: 'CSS', categoria: 'Programacion', imagenURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', descripcion: 'Lenguaje mas usado para estilos en paginas web!' },
    ]);
  }

}
