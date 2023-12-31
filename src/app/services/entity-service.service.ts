import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  saveEntityUrl:string;
  getEntityUrl:string;

  constructor(
    private http: HttpClient
  ) {
    this.saveEntityUrl="http://localhost:8080/booking/v1.0/saveEntityDetails";
    this.getEntityUrl="http://localhost:8080/booking/v1.0/getEntityDetails";
   }

  saveEntityDetails(entity:Entity){
    console.log(entity);
    return this.http.post(`${this.saveEntityUrl}`,entity);
  }

  getEntityDetails(entityCode:string){
    return this.http.get(`${this.getEntityUrl}/${entityCode}`);
  }
}
