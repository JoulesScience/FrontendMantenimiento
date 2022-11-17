import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'cedula': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'empresaId': ['', [Validators.required]]
    //'clave': ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioCliente: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
    let nombres = this.fgValidator.controls["nombres"].value;
    let apellidos = this.fgValidator.controls["apellidos"].value;
    let cedula = this.fgValidator.controls["cedula"].value;
    let celular = this.fgValidator.controls["celular"].value;
    let email = this.fgValidator.controls["email"].value;
    let empresaId = this.fgValidator.controls["empresaId"].value;
    //let clave = this.fgValidator.controls["clave"].value;
    let p = new ModeloCliente();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.cedula = cedula;
    p.celular = celular;
    p.email = email;
    p.empresaId = empresaId;
    //p.clave = clave;
    this.servicioCliente.CrearCliente(p).subscribe((datos:ModeloCliente) =>{
      alert("cliente almacenado correctamente");
      this.router.navigate(["/administracion/listar-clientes"]);
    }, (error:any) => {
      alert("Error almacenando el cliente");
    });

  }

}
