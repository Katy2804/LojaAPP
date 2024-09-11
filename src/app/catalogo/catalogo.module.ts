import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage {
  products = [
    { id: 1, name: 'Camiseta Branca', price: 49.99, image: 'assets/camiseta-branca.jpg' },
    { id: 2, name: 'Calça Jeans', price: 99.99, image: 'assets/calca-jeans.jpg' },
    { id: 3, name: 'Tênis Esportivo', price: 199.99, image: 'assets/tenis-esportivo.jpg' },
    // Adicione mais produtos se desejar
  ];

  constructor() {}
}

