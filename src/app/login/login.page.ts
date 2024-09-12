import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  // Lógica para o login
  login() {
    console.log('Login efetuado com sucesso!');
    this.router.navigate(['/home']); // Redireciona para a página Home
  }

  // Função para redirecionar à página de cadastro
  goToCadastro() {
    this.router.navigate(['/cadastro']); // Redireciona para a página de Cadastro
  }
}

