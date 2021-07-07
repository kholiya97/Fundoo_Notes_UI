import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpserviceService) { 
  }
  baseUrl = "http://localhost:60112/api/User/register";
    register(data:any) {
      return this.httpService.post( this.baseUrl, data);
    }
  
    
  }

