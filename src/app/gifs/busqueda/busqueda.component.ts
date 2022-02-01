import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {

  @ViewChild('txtBuscar', {static: false}) txtBuscar!: ElementRef<HTMLInputElement>;//a partir de angular 9 viewChild solo requiere un argumento, el static queda en false por defecto. Si se va a usar directivas estructurales ngIf o ngFor poner static=true

  constructor(private gifsService: GifsService) {}

  buscar(termino: string){
    
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
