import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router ) { }

  ngOnInit(): void {       
    
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, clave).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
      alert("Datos correctos")
    }, (error: any) => {
      //KO
      alert("Datos Invalidos")
    })
  }


}
