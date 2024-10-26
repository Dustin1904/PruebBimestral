import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, FormsModule, CommonModule],
})
export class Tab4Page {
  constructor() {}

  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  x1: number | string = '';
  x2: number | string = '';


  calcular(){
    if (this.a === null || this.b === null || this.c === null) return;

    const discriminante =  this.b * this.b - 4 * this.a * this.c;
    if (discriminante > 0) {
      this.x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    }  else if (discriminante === 0) {
      this.x1 = -this.b / (2 * this.a);
      this.x2 = "No hay solucion";
    }  else {
      this.x1 = "No hay solucion con numeros reales";
      this.x2 = "No hay solucion con numeros reales";
    }
    // Limpiar los campos luego de calcular
    this.a = null;
    this.b = null;
    this.c = null;
  }
}
