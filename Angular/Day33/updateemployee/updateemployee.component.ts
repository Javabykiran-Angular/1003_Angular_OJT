import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../utility/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  @Input() parentdata:Employee=<Employee>{};

  @Input() isImageFile!:boolean|undefined;

  allCountry:any[]=[];

  issubmitDissabled:boolean=true;
  backendResponse:string='';

  fileToUpload!:File;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  onUpdate(){
    this.parentdata.updateddtm=Date.now();
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.service.UpdateRecord(this.parentdata)
    .subscribe((response)=>{
      console.log(response);
      this.issubmitDissabled=false;
      this.backendResponse=response;
    })
  }

  onImageChange(event:any){
    console.log(event);
  this.fileToUpload=event.target.files[0];
 }

 onSend(){
   console.log(this.fileToUpload);
   
   this.service.imageUpload(this.fileToUpload)
   .subscribe((response:any)=>
   {
     //console.log(response)
     this.issubmitDissabled=false;
     this.backendResponse=response.msg;
   })
   
 }


}
