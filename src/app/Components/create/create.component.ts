import { Component, OnInit } from '@angular/core'

import { ServiceService } from '../../Service/service.service'
import { Vehiculo } from '../../Models/vehiculo'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();
  
  constructor(private service:ServiceService) { }
  
  ngOnInit(): void {
  }

  onSubmit() { 
    this.service.createVehiculo(this.vehiculo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehiculo = new Vehiculo();
  }
  

}
