import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Filesystem , Directory , Encoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab5.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, FormsModule, CommonModule],
})
export class Tab5Page {
  constructor() {}
  comentario: string = '';
  async  guardarComentario() {
    if ( Capacitor.isNativePlatform() ){
      const directorio = await Filesystem.writeFile({
        path:  'comentarios.txt',
        data: this.comentario,
        encoding: Encoding.UTF8,
        directory:  Directory.Documents
      })
    }  else {
      localStorage.setItem("Comentario: " ,  this.comentario);
    }
    this.comentario = '';
  }
}
