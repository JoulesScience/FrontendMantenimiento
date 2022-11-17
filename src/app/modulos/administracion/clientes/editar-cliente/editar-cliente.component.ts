import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
id:string='';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloCliente) => {
      this.fgValidator.controls["id"].setValue(datos.id);      
      this.fgValidator.controls["nombres"].setValue(datos.nombres);
      this.fgValidator.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidator.controls["cedula"].setValue(datos.cedula);
      this.fgValidator.controls["celular"].setValue(datos.celular);
      this.fgValidator.controls["email"].setValue(datos.email);
      this.fgValidator.controls["empresaId"].setValue(datos.empresaId);

    });
  }



  EditarCliente(){
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
    p.id = this.id;
    //p.clave = clave;
    this.servicioCliente.ActualizarCliente(p).subscribe((datos:ModeloCliente) =>{
      alert("Cliente actualizado correctamente");
      this.router.navigate(["/administracion/listar-clientes"]);
    }, (error:any) => {
      alert("Error actualizando el cliente");
    });

  }

}

