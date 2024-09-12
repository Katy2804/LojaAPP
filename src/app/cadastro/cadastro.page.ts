import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  constructor(private router: Router) {}

  // Função 'register' para lidar com o registro do usuário
  register() {
    // Aqui você pode adicionar a lógica para registro do usuário
    console.log('Usuário registrado com sucesso!');
    this.router.navigate(['/login']); // Opcional: redireciona de volta para a página de login após registro
  }
}

