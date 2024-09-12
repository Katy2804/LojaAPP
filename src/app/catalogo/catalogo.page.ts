import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage {
  products = [
    {
      nome: 'Vestido',
      descricao: 'Vestido de algodão 100%, disponível em várias cores.',
      imagem: 'assets/images/Vverde.jfif' // Imagem do vestido
    
    },
    {
      nome: 'Calça',
      descricao: 'Calça jeans pantalona.',
      imagem: 'assets/images/calca.jfif' // Imagem da calça
    },
    {
      nome: 'Tênis',
      descricao: 'Tênis esportivo confortável e estiloso.',
      imagem: 'assets/images/saia.jfif' // Imagem do tênis
    }
  ];
}



