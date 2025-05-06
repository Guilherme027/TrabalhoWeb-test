import { MensagemModel } from './mensagem.model';
import { Usuario } from './usuario.model';

describe('MensagemModel', () => {
  it('should create an instance', () => {
    const usuario = new Usuario(
      'Igor',
      'igor@gmail.com',
      '123',
      'admin',
      true
    );
    const mensagem = new MensagemModel('Mensagem de teste', usuario);
    expect(mensagem).toBeTruthy();
  });
});
