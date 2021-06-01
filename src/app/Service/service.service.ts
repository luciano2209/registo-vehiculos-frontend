import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vehiculo } from '../Models/vehiculo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  //TODO cambiar url a variable de entorno .env
  url = 'http://localhost:8080/vehiculos'

 
  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.url);
  }

  getVehiculoById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  
  createVehiculo(vehiculo: Object): Observable<Object> {
    return this.http.post(this.url, vehiculo);
  }

  deleteVehiculo(vehiculo:Vehiculo) {
    return this.http.delete<Vehiculo>(`${this.url}/${vehiculo._id}`);
  }

  updateVehiculo(vehiculo: Vehiculo): Observable<Object> {
    return this.http.put(`${this.url}/${vehiculo._id}`,vehiculo);
  }

}
