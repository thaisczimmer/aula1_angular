import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing-module';
import { Botaocomponent } from './botaocomponent/botaocomponent';


@NgModule({
  declarations: [
    Botaocomponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ]
})
export class SharedModuleModule { }
