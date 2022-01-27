import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import './js/app';
import { ClientesTabComponent } from './app/clientes-tab/clientes-tab.component'
import { clienteServiceProvider, estadoServiceProvider } from './ajs-upgraded-providers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { httpInterceptorProviders } from './app/interceptors';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ClientesTabComponent
  ],
  providers: [
    httpInterceptorProviders,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['manutencaoApp'], { strictDi: true });
  }
}