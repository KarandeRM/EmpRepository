import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Employee} from "./employee";



import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {


  constructor( private http:Http) { }
  getEmployees(){
    return this.http.get("http://localhost:3000/api/employees")
        .map(res => res.json());
  }
   addEmployee(info){
    return this.http.post("http://localhost:3000/api/employee",info)
        .map(res => res.json());
  }
  getEmployee(id){
    return this.http.get("http://localhost:3000/api/employee/"+id)
        .map(res => res.json());
  }

  
  updateEmployee(id, info){
    return this.http.put("http://localhost:3000/api/employee/"+id,info)
        .map(res => res.json());
  }
}