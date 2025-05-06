import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importe o RouterModule aqui
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public onLogin(form: any) {
    if (form.valid) {
      const usuario = this.userService.login(this.email, this.senha);
      if (usuario) {
        alert('Login bem-sucedido!');
        this.router.navigate(['/chat']); // Redireciona para a página de chat
      } else {
        alert('Credenciais inválidas!');
      }
    }
  }
}
