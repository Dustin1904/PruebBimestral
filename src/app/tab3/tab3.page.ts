import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonDatetime } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  standalone: true,
  imports: [IonDatetime, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  
  fecha1: string;
  fecha2: string;
  diferenciaFechas: number;
  
  primeraFecha(event: any){
    this.primeraFecha = event.detail.value;
    this.calcularDiferencia();
  }
  
  segundaFecha(event: any){
    this.segundaFecha = event.detail.value;
    this.calcularDiferencia();
  }
  
  constructor() {
    this.fecha1 = '';
    this.fecha2 = '';
    this.diferenciaFechas = 0;
  }

  // Logica para tomar los valores del componente datetime para calcular la diferencia de fechas entre las dos
  calcularDiferencia( ) {
    if (this.fecha1 && this.fecha2) {
      const fechaEntrada = new Date(this.fecha1);
      const fechaSalida = new Date(this.fecha2);
      const diferencia = fechaSalida.getTime() - fechaEntrada.getTime();
      const dias = Math.floor(diferencia / (1000 * 60 * 60 ))
      this.diferenciaFechas = dias;
    }
  }
}
