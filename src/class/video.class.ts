import { Video } from "../Interface/video.interface"
import { Catalogo } from "../types/catalogo.type"
import { pelicula } from "./pelicula.class"

export class VideoClub {
  public name: string
  public catalogo: Catalogo


  constructor(name: string) {
    this.name = name
    this.catalogo = []
  }

  agregar_pelis(datos: Video) {
    const nuevaPelicula = new pelicula(datos.id, datos.titulo, datos.genero, datos.duracion, datos.alquilada)
  }
}