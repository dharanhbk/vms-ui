import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RuTableComponent } from 'src/app/reusable/ru-table/ru-table.component';
import { VehicleService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-vehicle-table',
  standalone: true,
  imports: [RuTableComponent],
  templateUrl: './vehicle-table.component.html',
  styleUrl: './vehicle-table.component.scss'
})
export class VehicleTableComponent {

  pTableData!:any[][];
  pHeaders!:any[];
  pFlag:boolean=false;

  constructor(private _service: VehicleService, private messageService: MessageService) { }
  ngOnInit(){
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    this._service.getVehicleDetailsByEntityCode('1').subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapData(res)
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  mapData(res: any) {
    this.pTableData = res['data']
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
  }
}
