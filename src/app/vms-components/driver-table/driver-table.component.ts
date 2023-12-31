import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RuTableComponent } from 'src/app/reusable/ru-table/ru-table.component';
import { DriverService } from 'src/app/services/driver-service.service';
import { EntityService } from 'src/app/services/entity-service.service';

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
  entities: any=[];
  totalRecords: any;
  pageNo: number=0;
  fetchRecords: number=5;
  selectedEntityCode: any;

  constructor(private _service: DriverService, private messageService: MessageService,
    private entityService:EntityService) { }
  ngOnInit(){
    this.getEntities();
  }
  getEntities() {
    this.entityService.getAllEntityCards().subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapData(res);
        this.selectedEntityCode = res!.data[0]!.entityCode;
        this.getVehicleDetails(res!.data[0]!.entityCode);
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  getVehicleDetails(entityCode:any) {
    this._service.getDriverDetailsByEntityCode(entityCode,this.pageNo,this.fetchRecords).subscribe({
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
    this.totalRecords=res['totalCount'];
    res['data'].forEach((element:any) => {
      this.entities.push({label:element.entityName, value: element.entityCode})
    });
  }
  headerDropdownSelected(event:any){
    console.log(event)
    this.pageNo=0;
    this.fetchRecords=5;
    this.selectedEntityCode = event['value'];
    this.getVehicleDetails(event['value'])
  }
  onPageChange(event:any){
    console.log(event)
    this.pageNo=event['first'] / event['rows']
    this.fetchRecords=event['rows']
    this.getVehicleDetails(this.selectedEntityCode);
  }

}
