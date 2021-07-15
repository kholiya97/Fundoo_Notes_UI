import { hasLifecycleHook } from "@angular/compiler/src/lifecycle_reflector";
import { Component, Input, OnInit } from "@angular/core"
import { DataserviceService } from "src/app/Services/dataservice.service";

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})
export class GetnoteComponent implements OnInit {
  public data: any
  public backgroundColor = 'white'; //default
   arr: Array<{title: any, description: any}> = [{"title":"hello","description":"world"},{"title":"I","description":"loveCoding"},{"title":"jai shri Ram","description":"jai shri Ram"},{"title":"jai shri Ram","description":"jai shri Ram"}];
   
  id: any
  collaborator = ""

  constructor(private dataservice:DataserviceService) {
    this.submit()
    this.addNote()
   }
   @Input() note: any;

  ngOnInit(): void {
  }
   submit() {
  //   this.dataservice.getNotes().subscribe(res => {
  //     this.data = res
  //     this.arr = this.data.data
  //     this.arr = this.arr.reverse()

  //   })

  }
  onClick() {
  //   let dilougeRef = this.dilouge.open(UpdatenoteComponent, {
  //     height: '170px',
  //     width: '400px',
  //   })
  //   localStorage.setItem('id', data)
  //   dilougeRef.afterClosed().subscribe(res => {
  //     console.log(res)
  //     this.submit()
  //     localStorage.removeItem('id')
  //   })
  }


  onDeleteClick() {
  //   localStorage.setItem('id', data)
  }

  addNote() {
    // this.service.add$.subscribe(message => {
    //   this.submit()
    // })
  }
  deleteNote() {
  //   this.service.add$.subscribe(message => {
  //     this.submit()
  //   })
  }

  onClick1() {
    // let dilougeRef = this.dilouge.open(CollaboratorComponent, {
    //   height: '170px',
    //   width: '400px'
    // })
    // dilougeRef.afterClosed().subscribe(res => {
    //   console.log(res)
    //   this.submit()
    // })
  }
  updateBackgroundColor(colorCode: string) {
    this.backgroundColor = colorCode;
  }
}





