import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Entity } from '../model/entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  saveEntityUrl:string;
  getEntityUrl:string;
  getEntityCard:string;

  constructor(
    private http: HttpClient
  ) {
    this.saveEntityUrl=environment.resource_url+"/booking/v1.0/saveEntityDetails";
    this.getEntityUrl=environment.resource_url+"/booking/v1.0/getEntityDetails";
    this.getEntityCard=environment.resource_url+"/booking/v1.0/getAllEntityCards";
   }

  saveEntityDetails(entity:Entity){
    console.log(entity);
    return this.http.post(`${this.saveEntityUrl}`,entity);
  }

  getEntityDetails(entityCode:string){
    return this.http.get(`${this.getEntityUrl}/${entityCode}`);
  }

  getAllEntityCards(){
    return this.http.get(`${this.getEntityCard}`);
  }
}
