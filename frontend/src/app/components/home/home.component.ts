import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UserService } from '../../services/user.service';
import { MensagemModel } from '../../models/mensagem.model';
import { CommonModule } from '@angular/common';
import { MensagemService } from '../../services/mensagem.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: Usuario[] = [];

  constructor(
    private userService: UserService,
    private mensagemService: MensagemService
  ) {}


  public onSubmit(form: any) {
    if (form.valid) {
      try {
        const newUsuario = new Usuario(
          form.value.nome,
          form.value.email,
          form.value.senha,
          form.value.funcao,
          form.value.aceitouTermos
        );
  
        this.userService.addUsuario(newUsuario);
        this.usuarios = this.userService.listUsuarios();

        alert('Usuário cadastrado com sucesso!');
        form.resetForm();
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  public onEnviarMensagem(form: any) {
    if (form.valid) {
      try {
        const usuario = this.usuarios[this.usuarios.length - 1]; // Pega o último usuário cadastrado
        const newMensagem = new MensagemModel(
        form.value.conteudo,
        usuario,
        form.value.imagemUrl
      );
      
      this.mensagemService.addMensagem(newMensagem);
      alert('Mensagem enviada com sucesso!');
      form.resetForm();

    } catch (error: any) {
      alert(error.message);
    }
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
  }
  
  public onListarMensagens() {
    return this.mensagemService.listMensagens();
  }

  public onEditarMensagem(mensagem: MensagemModel): void {
    const novoConteudo = prompt('Digite o novo conteúdo da mensagem:', mensagem.getConteudo());
    if (novoConteudo !== null) {
      this.mensagemService.editMensagem(mensagem, novoConteudo);
    }
  }

  public onRemoverMensagem(mensagem: MensagemModel): void {
    this.mensagemService.removeMensagem(mensagem);
  }
}