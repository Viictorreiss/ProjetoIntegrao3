import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { CondominioRegistryComponent } from './condominio-registry/condominio-registry.component';
import { LinkMoradoresComponent } from './link-moradores/link-moradores.component';
import { LinkUserComponent } from './link-user/link-user.component';
import { MuralComponent } from './mural/mural.component';
import { AddTaskComponent } from './addTask/addTask.component';
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes = [
   { 
      path: '', 
      component: HomeComponent 
   },
   {
      path: 'mural',
      component: MuralComponent
   },
   { 
      path: 'condominio/:id/cadastro', 
      component: CadastroUserComponent 
   },
   {
      path: 'login',
      component: LoginUserComponent
   },
   {
      path: 'addTask/:id',
      component: AddTaskComponent
   },
   {
      path: 'condominio',
      component: CondominioRegistryComponent
   },
   {
      path: 'condominio/:id/link', 
      component: LinkMoradoresComponent 
   },
   {
      path: 'usuario/:id/link', 
      component: LinkUserComponent 
   },
   {
      path: 'perfil/:id', 
      component: PerfilComponent 
   }

   // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
