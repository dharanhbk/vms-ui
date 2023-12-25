import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { Entity } from 'src/app/model/entity';
import { EntityService } from 'src/app/services/entity-service.service';

@Component({
  selector: 'app-entity-cards',
  standalone: true,
  imports: [CardModule,CommonModule],
  templateUrl: './entity-cards.component.html',
  styleUrl: './entity-cards.component.scss'
})
export class EntityCardsComponent implements OnInit{

  data!:Entity[];

  constructor(private entityService:EntityService){

  }

  ngOnInit(){
    this.getEntityCards();
  }
  getEntityCards() {
    this.entityService.getAllEntityCards().subscribe({
      next: (res: any) => {
        console.log(res)
        this.mapData(res);
      }, error: (err: any) => {
        console.log(err)
      }
    })
  }

  mapData(res: any) {
    this.data = res['data'];
    console.log(this.data);
  }



}
