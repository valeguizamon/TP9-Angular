import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'instrumento/:id', component: InstrumentoComponent },
  { path: 'donde-estamos', component: DondeEstamosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
