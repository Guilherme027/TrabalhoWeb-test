import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule], // Adiciona FormsModule aqui
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public onSubmit(form: any) {
    if (form.valid) {
      const newUsuario = new Usuario(
        form.value.nome,
        form.value.email,
        form.value.senha,
        form.value.funcao,
        form.value.aceitouTermos
      );

      this.userService.addUsuario(newUsuario);
      alert('Usuário cadastrado com sucesso!');
      form.resetForm();
      this.router.navigate(['/login']); // Redireciona para a página de login
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
