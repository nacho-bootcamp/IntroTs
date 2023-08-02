// quiero que la clase pelicula cumpla si o si con la interface
//entonces lo que hace la clase es implementar la interfaz

import { Video } from "../Interface/video.interface";

export class pelicula implements Video {
  constructor(public id: number, public titulo: string, public genero: string, public duracion: number, public alquilada: boolean) {

  }

}

//public modificador de accesos lo que dice es que cuando creemos intancias
//de esas clases vamos a poder accedera esos datos 