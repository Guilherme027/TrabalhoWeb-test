import { Usuario } from './usuario.model';

describe('Usuario', () => {
  it('should create an instance', () => {
    const usuario = new Usuario(
      'Igor', // nome
      'igor@example.com', // email
      'senha123', // senha
      'admin', // funcao
      true // aceitouTermos
    );
    expect(usuario).toBeTruthy();
  });
});
