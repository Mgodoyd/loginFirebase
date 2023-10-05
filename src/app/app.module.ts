import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from'@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CreaNuevoUsuarioComponent } from './pages/crea-nuevo-usuario/crea-nuevo-usuario.component';

import { APP_ROUTING } from './app.routers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreaNuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
