// import { pelicula } from "./src/class/pelicula.class";

// const miPelicula: pelicula = new pelicula(1, "robocop", "accion", 56, false)


import { VideoClub } from "./src/class/video.class";

const nachoPelis: VideoClub = new VideoClub("nachoPelis")

nachoPelis.agregar_pelis({ id: 2, titulo: "robocop", duracion: 234, alquilada: false, genero: "guerra" })