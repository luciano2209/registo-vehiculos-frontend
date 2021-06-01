import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service'
import { Vehiculo } from '../../Models/vehiculo'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() vehiculo:Vehiculo = new Vehiculo()

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.service.updateVehiculo(this.vehiculo)
      .subscribe(data => console.log(data), error => console.log(error));
  }
  

}
