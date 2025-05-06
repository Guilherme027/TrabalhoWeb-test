export class Usuario {
  constructor(
    private nome: string,
    private email: string,
    private senha: string,
    private funcao: string,
    private aceitouTermos: boolean,
    private imagem: string = 'https://via.placeholder.com/40' // Valor padrão
  ) {}

  public getNome(): string { return this.nome; }
  public getEmail(): string { return this.email; }
  public getFuncao(): string { return this.funcao; }
  public getAceitouTermos(): boolean { return this.aceitouTermos; }
  public getImagem(): string { return this.imagem; }

  public setNome(nome: string): void { this.nome = nome; }
  public setEmail(email: string): void {
    if (!email.includes('@')) {
      throw new Error('Email inválido');
    }
    this.email = email;
  }
  public setSenha(senha: string): void { this.senha = senha; }
  public setFuncao(funcao: string): void { this.funcao = funcao; }
  public setImagem(imagem: string): void { this.imagem = imagem; }

  public validarSenha(senha: string): boolean {
    return this.senha === senha;
  }
}
