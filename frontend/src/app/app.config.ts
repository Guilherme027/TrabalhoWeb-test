import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importe o RouterModule
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    RouterModule  // Adicione o RouterModule aqui
  ]
};
