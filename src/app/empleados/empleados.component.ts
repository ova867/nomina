import { Component } from '@angular/core';
import { Empleados } from '../entidades/empleados';
import { ServicioEmpleadoService } from '../servicios/servicio-empleado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  imports: [CommonModule,  FormsModule],

  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  Id!:number;
  nombres!: string;
  apellidos!: string;
  correo!: string;
  
  emple : Empleados = new Empleados;

  Empleado! : Empleados[];

  constructor(private servicio:ServicioEmpleadoService){}

  //para iniciar metodos al momento de cargar la pagina

  ngOnInit(): void{

    this.ver_lista_empleados()

  }

  //funcion para ver la lista de empleados

  ver_lista_empleados(){
    this.servicio.ver_empleados().subscribe(dato=>{
      console.log(dato)

      this.Empleado= dato
    })
  }

 

  guardar(){
    this.servicio.guardar_empleado(this.Id, this.nombres, this.apellidos, this.correo).subscribe(dato=>{
      console.log(dato)
    })
  }

  eliminar(){
    this.servicio.eliminar_empleado(this.Id).subscribe(dato =>{
       console.log(dato)
    })
   }

   actualizar(){
    this.servicio.actualizar_empleado(this.Id, this.nombres, this.apellidos, this.correo).subscribe(dato =>{
      console.log(dato)
    })
  }

  ver_empleado(id_buscado:number){

    this.servicio.buscar_empleado(id_buscado).subscribe(dato=>{

      this.emple = dato;

      console.log(this.emple)
    })
  }

}
