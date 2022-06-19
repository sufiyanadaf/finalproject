import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApisharedService } from './apishared.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject';
  Array: any = [];
  newArray:any=[];
  constructor(private Dialog: MatDialog, 
              private apisharedservice:ApisharedService,
              private api: ApisharedService) { }

  ngOnInit() {
    this.recieveMethod()
    this.api.getData().subscribe((data:any)=>{
      console.log(data)
      this.newArray=data
    })
  }

  openDialog() {
    this.Dialog.open(DialogComponent, { width: '350px' })
  }

  recieveMethod() {
    this.api.getMethod().subscribe((responce: any) => {
      console.log(responce)
      for (let i = 0; i < responce.records.length; i++) {
        this.Array.push(responce.records[i])
      }
    })
  }
  edit(item:any){
       this.Dialog.open(DialogComponent,{width:'350px', data:item})
  }
  delete1(index:number){
  this.Array.splice(index,1)
  }
  delete2(index:number){
    this.newArray.splice(index,1)
    }

}



