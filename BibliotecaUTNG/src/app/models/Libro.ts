export class Libro {
    _id?: number;
    nombreAutor?: string;
    titulo?: string;
    editorial?: string;
    categoria?: number;
    anioPublicacion?: string;
    disponibilidad?: string;
    img?: String;

    constructor(nombreAutor: string, titulo: string, editorial: string, categoria: number, anioPublicacion: string, disponibilidad: string, img: String) {
        this.nombreAutor = nombreAutor;
        this.titulo = titulo;
        this.editorial = editorial;
        this.categoria = categoria;
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = disponibilidad;
        this.img = img;
    }
}