import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { Vehiculo } from '../../Models/vehiculo'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo = new Vehiculo()
  display = false;
  dataUpdate: Vehiculo = new Vehiculo()
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerVehiculos()
  }

  eliminar(vehiculo:Vehiculo){
    this.service.deleteVehiculo(vehiculo)
    .subscribe(data => {
      console.log(data)
      this.obtenerVehiculos()
    }, error => console.log(error))
  }

  obtenerVehiculos(): void {
    this.service.getVehiculos()
    .subscribe(data => {
      this.vehiculos=data;
    }, error => console.log(error))
  } 

  onPress(vehiculo:Vehiculo) {
    this.dataUpdate = vehiculo
    this.display = true;
  }
  
}
