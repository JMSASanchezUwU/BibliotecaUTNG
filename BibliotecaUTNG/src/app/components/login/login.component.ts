import { UsuariosService } from './../../services/usuarios.service';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioForm2: FormGroup;
  email: string="";
  contrasena: string="";

  constructor(private fb: FormBuilder,
    private fb2: FormBuilder,
    private router: Router,
    private _usuarioService: UsuariosService) {
    this.usuarioForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      email: ['', Validators.email],
      rol: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
    this.usuarioForm2 = this.fb2.group({
      email: ['', Validators.email],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  crearCuenta() {
    const USUARIO: Usuario = {
      nombreUsuario: this.usuarioForm.get('nombreUsuario')?.value,
      email: this.usuarioForm.get('email')?.value,
      rol: this.usuarioForm.get('rol')?.value,
      contrasena: this.usuarioForm.get('contrasena')?.value,
    }
    console.log(USUARIO);
    this._usuarioService.crearUsuario(USUARIO).subscribe(data => {
      alert("Se ha creado el usuario exitosamente!!!");
      window.location.reload();
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    });

  }

  leguearUsuario(email: string, contrasena: string) {
    this._usuarioService.logearUsuario(email, contrasena)
        .subscribe(data => {
        // Guardar el ID del usuario en el localStorage
        localStorage.setItem('userID', data._id);

        // Guardar el token en el localStorage
        localStorage.setItem('token', data.token);

        // Redireccionar a la página de libros con el ID del usuario
        this.router.navigate(['/libros', data._id]);
        }, error => {
            console.log(error);
        });
}    
}
