import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor(private httpClient: HttpClient) { }

  ver_empleados():Observable<any>{
  return this.httpClient.get(`http://localhost:8080/empleados/verdatos2`)
  }

  guardar_empleado(
    id:number,
    nombre:string,
    apellidos:string,
    correo:string
  ):Observable<object>{
    return this.httpClient.get(`http://localhost:8080/empleados/guardar?nombre=${nombre}&apellido=${apellidos}&correo=${correo}&id=${id}`)
  }

  eliminar_empleado(
    id:number
  ):Observable<object>{
    return this.httpClient.get(`http://localhost:8080/empleados/eliminar?id=${id}`)
  }

  actualizar_empleado(
    id:number,
    nombre:string,
    apellidos:string,
    correo:string
  ):Observable<object>{
    return this.httpClient.get(`http://localhost:8080/empleados/actualiza_datos?id=${id}&nuevo_nombre=${nombre}&nuevo_apellido=${apellidos}&nuevo_correo=${correo}`)
  }

  buscar_empleado(
    id:number
  ):Observable<any>{
    return this.httpClient.get(`http://localhost:8080/empleados/busca?id=${id}`)
  }
}
