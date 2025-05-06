import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarios: Usuario[] = [];
  private usuarioLogado: Usuario | null = null;

  constructor() {
    // Recupera o usuário logado (se houver) do localStorage
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      this.usuarioLogado = JSON.parse(usuarioLogado);
    }
  }

  public addUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  public listUsuarios(): Usuario[] {
    return this.usuarios;
  }

  public login(email: string, senha: string): Usuario | null {
    const usuario = this.usuarios.find(user => user.getEmail() === email);
    if (usuario && usuario.validarSenha(senha)) {
      this.usuarioLogado = usuario;
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario)); // Armazena o usuário logado no localStorage
      return usuario;
    }
    return null;
  }

  public getUsuarioLogado(): Usuario | null {
    return this.usuarioLogado;
  }

  public logout(): void {
    this.usuarioLogado = null;
    localStorage.removeItem('usuarioLogado'); // Limpa o usuário logado do localStorage
  }
}
