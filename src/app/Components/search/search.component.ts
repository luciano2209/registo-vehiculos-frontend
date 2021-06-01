import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Models/vehiculo';
import { ServiceService } from '../../Service/service.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  _id: string = '';
  vehiculo: Vehiculo = new Vehiculo();


  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }
  
  buscarVehiculo() {
    this.service.getVehiculoById(this._id)
      .subscribe(data =>       
        this.vehiculo = data,
        );
  }

  onSubmit() {
    this.buscarVehiculo();
  }

}
