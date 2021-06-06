import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];

  constructor(private serviceInstrumento: InstrumentoService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.serviceInstrumento.getInstrumentos();
    console.log(this.productos);
  }

  verInstrumento(id: string){
    console.log("ID del instrumento: " + id);
    this.router.navigate(['/instrumento/' + id]);
  }

}
