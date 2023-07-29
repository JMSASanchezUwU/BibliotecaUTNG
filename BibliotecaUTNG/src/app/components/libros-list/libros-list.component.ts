import { Component, HostBinding, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.services';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent implements OnInit {
  userID = localStorage.getItem('userID');
  isBibliotecario: boolean = false; // Variable para verificar si el usuario es autorizado (bibiotecario)

  @HostBinding ('class') classes='row';

  libros: any=[];
  
  constructor (private librosService: LibrosService, private usuarioService: UsuariosService){ }
  ngOnInit():void {
    this.getLibros();
    this.checkIfUserIsBibliotecario();
  }

  getLibros(){
  this.librosService.getLibros().subscribe(
    res => {
      this.libros = res;
    },
    err => console.log(err)
  );
}
//ELIMINAR EL JUEGO
deleteLibro(id: string){
  //console.log(id);
  this.librosService.eliminarLibro(id).subscribe(
    res => {
      console.log(res);
      this.getLibros();
    },
    err => console.log(err)
  );
}

checkIfUserIsBibliotecario() {
  if (this.userID) {
    this.usuarioService.getUsuario(this.userID).subscribe(
      res => {
        console.log(res.rol);
        // Verificar si el usuario es bibliotecario aquí
        this.isBibliotecario = res.rol === 'Bibliotecario';
      },
      error => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  } else {
    console.error('El valor de userID es undefined');
  }
}
}
