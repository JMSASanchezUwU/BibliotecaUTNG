export class Usuario {
    _id?: number;
    nombreUsuario?: string;
    email?: string;
    rol?: string;
    contrasena?:string;

    constructor(nombreUsuario: string, rol: string, email: string, contrasena: string) {
        this.nombreUsuario=nombreUsuario;
        this.email = email;
        this.rol = rol;
        this.contrasena=contrasena;
    }
}