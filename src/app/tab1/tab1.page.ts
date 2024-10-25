import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [IonButton, IonImg, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonImg],
})
export class Tab1Page {
  constructor() {}
}
