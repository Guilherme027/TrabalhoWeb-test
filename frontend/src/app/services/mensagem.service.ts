import { Injectable } from '@angular/core';
import { MensagemModel } from '../models/mensagem.model';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private mensagens: MensagemModel[] = [];

  addMensagem(mensagem: MensagemModel): void {
    this.mensagens.push(mensagem);
  }

  listMensagens(): MensagemModel[] {
    return this.mensagens;
  }

  removeMensagem(mensagem: MensagemModel): void {
    const index = this.mensagens.indexOf(mensagem);
    if (index > -1) {
      this.mensagens.splice(index, 1);
    }
  }

  editMensagem(mensagem: MensagemModel, novoConteudo: string): void {
    mensagem.setConteudo(novoConteudo);
  }
}
