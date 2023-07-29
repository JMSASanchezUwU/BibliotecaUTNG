import { Libro } from './../models/Libro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LibrosService {
    url = 'http://localhost:4000/api/Libro/';

    constructor(private http: HttpClient) { }


    // Método para crear un libro
    crearLibro(libro: Libro): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        return this.http.post(this.url, libro , { headers });
    }

    // Método para obtener un libro por ID
    getLibro(id: string): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        return this.http.get(this.url + id, { headers });
    }
    // Método para obtener todos los libros
    getLibros(): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        return this.http.get(this.url, { headers });
    }

    // Método para eliminar un libro
    eliminarLibro(id: string): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        return this.http.delete(this.url + id, { headers });
    }

    // Método para editar un libro
    editarLibro(id: string, libro: Libro): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        return this.http.put(this.url + id, libro, { headers });
    }
}
