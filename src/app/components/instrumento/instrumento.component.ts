import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {

  instrumento: any;

  constructor(private serviceInstrumento: InstrumentoService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.instrumento = this.serviceInstrumento.getInstrumentoId(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
