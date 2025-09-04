import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{
  path: 'contador',
  loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
},


{
  path: 'estrutura',
  loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
},

{
  path: 'shared-module',
  loadChildren: () => import('./shared-module/shared-module-module').then(m => m.SharedModuleModule)
},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


