import { Component,Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ApisharedService } from '../apishared.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form :any = FormGroup;
  actionBtn:string="Submit";
  myArray:any=[];
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              private api:ApisharedService,
              private apisharedservice :ApisharedService,
              @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {
    
    this.form= new FormGroup({
      'firstname':new FormControl("",[Validators.required]),
      'lastname':new FormControl("",[Validators.required]),
      'dob':new FormControl("",[Validators.required]),
      'gender':new FormControl("",[Validators.required]),
      'status':new FormControl("",[Validators.required])
    })

    if (this.editData) {
      this.actionBtn = "Update"
      this.form.controls['firstname'].setValue(this.editData.firstname);
      this.form.controls['lastname'].setValue(this.editData.lastname);
      this.form.controls['dob'].setValue(this.editData.dob);
      this.form.controls['gender'].setValue(this.editData.gender);
      this.form.controls['status'].setValue(this.editData.status);
    }

  }
  addValue(){
    
    if(this.form.valid){
      this.api.postData(this.form.value).subscribe((data:any)=>{
        console.log(data)
        this.myArray = data
      })

      console.log(this.form.value)
      this.form.reset();
      this.dialogRef.close();
     
    }else{
      this.updateProduct()
    }
   
  }
// recieveData(){
//   console.log(this.form.value)
//   this.api.postData(this.form.value).subscribe((data:any)=>{
//     console.log(data)
//   })
// }
updateProduct(){
  this.api.getProduct(this.form.value, this.editData).subscribe((data:any)=>{
    console.log(data)
  })
}  
}
