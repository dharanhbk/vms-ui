import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RuTableComponent } from 'src/app/reusable/ru-table/ru-table.component';
import { DriverService } from 'src/app/services/driver-service.service';

@Component({
  selector: 'app-driver-table',
  standalone: true,
  imports: [RuTableComponent],
  templateUrl: './driver-table.component.html',
  styleUrl: './driver-table.component.scss'
})
export class DriverTableComponent {

  pTableData!:any[][];
  pHeaders!:any[];
  pFlag:boolean=false;

  constructor(private _service: DriverService, private messageService: MessageService) { }
  ngOnInit(){
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    this._service.getDriverDetailsByEntityCode('1').subscribe({
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
