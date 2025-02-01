import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioEmpleadoService } from '../../servicios/servicio-empleado.service';
import { Empleados } from '../../entidades/empleados';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  //Declaración de variables

  Id!:number;
  nombres!: string;
  apellidos!: string;
  correo!: string;

  emple : Empleados = new Empleados;

  constructor(private servicio:ServicioEmpleadoService){}

  ngOnInit(): void{

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

      if(dato != null){
        this.emple = dato;
        console.log(this.emple)
      }
    })
  }

  
}
