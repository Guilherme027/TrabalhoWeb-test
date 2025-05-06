import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MensagemService } from '../../services/mensagem.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { MensagemModel } from '../../models/mensagem.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  usuario: Usuario | null = null;
  mensagens: MensagemModel[] = [];

  // ✅ Propriedades ligadas ao ngModel
  conteudoMensagem: string = '';
  imagemMensagem: string = '';

  constructor(
    private mensagemService: MensagemService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usuario = this.userService.getUsuarioLogado();
    if (!this.usuario) {
      this.router.navigate(['/login']);
    }

    this.mensagens = this.mensagemService.listMensagens();
  }

  public onEnviarMensagem(form: any) {
    if (form.valid && this.conteudoMensagem.trim() !== '') {
      const mensagem = new MensagemModel(
        this.conteudoMensagem,
        this.usuario!,
        this.imagemMensagem || ''
      );

      this.mensagemService.addMensagem(mensagem);
      this.mensagens = this.mensagemService.listMensagens();

      // Limpa os campos do formulário
      this.conteudoMensagem = '';
      this.imagemMensagem = '';
      form.resetForm();
    }
  }

  public onLogout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
