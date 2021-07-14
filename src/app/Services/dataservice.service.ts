import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
   array:Array<any>=[];
   
  constructor() { }

  postarray(data:Array<any>=[]){
    this.array=data;
    console.log(this.array)
  }
  getarray(){
    return this.array;
  }
}
