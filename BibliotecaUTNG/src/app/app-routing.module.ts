
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosListComponent } from './components/libros-list/libros-list.component';
import { LibrosFormComponent } from './components/libros-form/libros-form.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'libros/:id', component:LibrosListComponent},
  {path:'libros/add/:id', component: LibrosFormComponent},
  {path: 'libros/edit/:id', component: LibrosFormComponent},
  // {path: 'admin/:_id', component: AdministradorComponent},
  // {path: 'user/:_id', component: UsuarioEstandarComponent},
  // {path: 'editar-user/:id', component:EditarUsuarioComponent},
  {path: '**', redirectTo:'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
