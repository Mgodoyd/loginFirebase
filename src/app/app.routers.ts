import { RouterModule, Routes } from "@angular/router";   
import { CreaNuevoUsuarioComponent } from "./pages/crea-nuevo-usuario/crea-nuevo-usuario.component";  
import { LoginComponent } from "./pages/login/login.component";   

const APP_ROUTES:Routes=[

    //{path:'login', component: LoginComponent},   
    //{path:'CreaNuevoUsuario', component: CreaNuevoUsuarioComponent},
    //{path: '**',pathMatch:'full',redirectTo:'login'}

];
export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);
