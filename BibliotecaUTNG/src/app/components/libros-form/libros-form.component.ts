import { Component,HostBinding, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/Libro';
import { LibrosService } from 'src/app/services/libros.services';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.css']
})
export class LibrosFormComponent implements OnInit {
  @HostBinding('class') classes='row';
  
  libro:Libro={
    nombreAutor: '',
    titulo: '',
    editorial: '',
    categoria: 0,
    anioPublicacion: '',
    disponibilidad: '',
    img:'',
  };

  edit:boolean = false;
  constructor(private libroService: LibrosService, 
              private router: Router,
              private activeRoute: ActivatedRoute){}

  ngOnInit():void{

      const params= this.activeRoute.snapshot.params;
      //console.log(params);
      this.libroService.getLibro(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.libro = res;
          this.edit = true;
        },
        err => console.error(err)
      )

     
  }

  crearLibro() {
    this.libroService.crearLibro(this.libro)
      .subscribe(
        res => {
          const userID = localStorage.getItem('userID');
          this.router.navigate(['/libros', userID]);
        },
        err => console.error(err)
      );
  }
  

  updateLibro() {
    if (this.libro._id) { // Verifica que _id tenga un valor
      this.libroService.editarLibro(this.libro._id.toString(), this.libro)
        .subscribe(
          res => {
            const userID = localStorage.getItem('userID');
            this.router.navigate(['/libros', userID]);
          },
          err => console.error(err)
        );
    } else {
      console.error('El valor de _id es undefined');
    }
  }

}