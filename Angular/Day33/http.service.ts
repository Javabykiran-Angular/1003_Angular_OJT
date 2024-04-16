import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl="http://localhost:8080/api/";

  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }


  login(obj:any){
    return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getAllRecord(){
    return  (this.http.get(`${this.baseUrl}getallEmp`));
  }

  getParticularRecordById(id:any){
      return (this.http.get(`${this.baseUrl}getparticularEmp/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  saveRecord(obj:any){
      return (this.http.post(`${this.baseUrl}addEmployee`,obj,{responseType:"text"}));
  }

  UpdateRecord(obj:any){
     return (this.http.put(`${this.baseUrl}updateEmp`,obj,{
        responseType:'text'
      }));
  }

  deleteData(id:any){
   return (this.http.delete(`${this.baseUrl}deleteEmp/${id}`,{
    responseType:'text'
   }));
  }


  imageUpload(file:File){
    let formData=new FormData();
    formData.append('file',file,file.name)
    let headers = new HttpHeaders();
    headers.append('Content-Type','image');
    return (this.http.post(`${this.baseUrl}uploadImageFile`,formData,{headers:headers}));
  }

}
