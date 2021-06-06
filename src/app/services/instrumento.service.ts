import { Injectable } from '@angular/core';

import * as data from 'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentosFile: any = (data as any).default;

  constructor() {
    console.log("Service Cargado!");
    console.log(this.instrumentosFile);
  }

  getInstrumentos(): any[] {
    console.log(this.instrumentosFile.instrumentos);
    return this.instrumentosFile.instrumentos;
  }

  getInstrumentoId(id: string): any {
    for (let instrumento of this.instrumentosFile.instrumentos) {
      if (instrumento.id == id) {
        console.log(instrumento);
        return instrumento;
      }
    }
  }
}
