import { Usuario } from "./usuario.model";

export class MensagemModel {
  private createdAt: Date;

  constructor(
    private conteudo: string,
    private usuario: Usuario,
    private imagemUrl?: string
  ) {
    this.createdAt = new Date(); // Define a data de criação no momento da instância
  }

  // Getter para o conteúdo da mensagem
  public getConteudo(): string {
    return this.conteudo;
  }

  // Setter para o conteúdo da mensagem
  public setConteudo(conteudo: string): void {
    this.conteudo = conteudo;
  }

  // Getter para o usuário associado à mensagem
  public getUsuario(): Usuario {
    return this.usuario;
  }

  // Getter para a URL da imagem (caso exista)
  public getImagemUrl(): string | undefined {
    return this.imagemUrl;
  }

  // Setter para a URL da imagem
  public setImagemUrl(imagemUrl: string): void {
    this.imagemUrl = imagemUrl;
  }

  // Getter para a data de criação da mensagem
  public getCreatedAt(): Date {
    return this.createdAt;
  }

  // Setter para a data de criação (opcional)
  public setCreatedAt(date: Date): void {
    this.createdAt = date;
  }
}
