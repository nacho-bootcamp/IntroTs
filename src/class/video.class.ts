import { Catalogo } from "../types/catalogo.type"

class VideoClub {
  public name: string
  public catalogo: Catalogo


  constructor(name: string) {
    this.name = name
    this.catalogo = []
  }
}