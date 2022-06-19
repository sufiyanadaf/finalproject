import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApisharedService {

  url='https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users';
  headers=new HttpHeaders();
  body={
    "firstname":"",
    "lastname":"",
    "dob":"",
    "gender":"",
    "status":""
  }
  displayMessage: any;
  r_message: any;
  constructor(private httpclient :HttpClient) { }
//  getMethod(){
//   let headers = new HttpHeaders();
//   headers = headers.set('Authorization', 'Bearer key3GnfHvdYoWedr5');
//   let url = 'https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users'
//   return this.httpclient.get(url, { headers: headers } );
//  }

getMethod(){
  this.getHeader()
  return this.httpclient.get(this.url, {headers:this.headers})
}
 getHeader(){
  this.headers = this.headers.set('Authorization','Bearer key3GnfHvdYoWedr5')
  return this.headers;
 }

 postData(body:any){
  return this.httpclient.post('http://localhost:3000/comments', body)
 }
 getData(){
  return this.httpclient.get('http://localhost:3000/comments')
 }
 getProduct(data:any,update:any){
  return this.httpclient.put('http://localhost:3000/comments', data,update)
}
 
}
