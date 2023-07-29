import { Usuario } from './../models/Usuario';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:4000/api/Usuario/';
  urlLogin = 'http://localhost:4000/api/Usuario/login';

  constructor(private http: HttpClient) {}

  // Método para crear un usuario
  crearUsuario(usuario:Usuario):Observable<any>{
    return this.http.post(this.url, usuario);
  }

  logearUsuario(email:string, contrasena:string):Observable<any>{
    return this.http.post(this.urlLogin, {email,contrasena});
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
}
  
}
