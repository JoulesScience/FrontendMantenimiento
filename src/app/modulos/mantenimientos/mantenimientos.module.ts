import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { RealizarMantenimientoComponent } from './realizar-mantenimiento/realizar-mantenimiento.component';


@NgModule({
  declarations: [
    RealizarMantenimientoComponent
  ],
  imports: [
    CommonModule,
    MantenimientosRoutingModule
  ]
})
export class MantenimientosModule { }
