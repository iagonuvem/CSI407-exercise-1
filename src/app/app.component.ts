import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Corrida', url: '/race', icon: 'car-sport' },
    { title: 'Calculadora', url: '/calc', icon: 'calculator' },
    { title: 'Controle Pix', url: '/pix', icon: 'card' },
    { title: 'Consumo de Combustivel', url: '/fuel', icon: 'flask' }
  ];
  constructor() {}
}
