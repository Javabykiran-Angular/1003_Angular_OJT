import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Employee } from '../utility/employee';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  selected:boolean=false;
  nameSearch:string='';
  p:number=1;
  modalRef!: BsModalRef;  
  empObj:Employee=<Employee>{};
  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllRecord();
  }

  getAllRecord(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      //console.log(response);
      this.empData=response
    })
  }

  onEdit(item:any){
   // console.log(item);
    this.selected=true;
    this.empObj=item;
  }

  isRadioChecked(){
    if(this.selected)
      return true;
    else 
    return false;
  }

  onUpdate(popup: TemplateRef<any>){
    if(this.isRadioChecked()){
      // open pop up box 

      this.modalRef = this.modalservice.show(        
        popup, this.config);

    }else{
     // alert("Please Select a record to update ");
     this.toaster.info("Please Select a record to update ")
    }
  }

  onDelete(){
    if(this.isRadioChecked()){
      // delete code 

      this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
      .afterClosed()
      .subscribe((res)=>{
        console.log(res)
        
        if(res){
          // delete a record
          this.service.deleteData(this.empObj.id)
          .subscribe((response)=>{
            //console.log(response);
            this.toaster.success(response);
            this.getAllRecord();
          })

        }else{
          // don't delete
        }

      })

    }else{
     // alert("Please Select a record to Delete ");
     this.toaster.warning('Please Select a record to Delete ');
    }

  }


}
