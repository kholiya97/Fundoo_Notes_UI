import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpclient: HttpClient) { 
    
  }
  post(url:any, data:any) {
    return this.httpclient.post(url, data)
  }
}
