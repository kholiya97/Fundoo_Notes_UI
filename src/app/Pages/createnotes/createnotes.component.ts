import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { Note } from './createnotes.model';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  panelOpenState = false;
  notes = new Note()
  arr:Array<any>=[];
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }
  noteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null)
  });
  onCloseClick() {
    return this.panelOpenState = !this.panelOpenState

}
close(){

  console.log (this.noteForm.value)
  this.arr=this.noteForm.value
  console.log(this.arr)
  this.dataservice.postarray(this.arr)
}
submit() {
  console.log (this.noteForm.value)
  // this.panelOpenState = !this.panelOpenState
  // this.service1.addNote(this.notes).subscribe(res => {
  //   this.service.sendMessage("addedNote")
  // }, err => {

  // })
}
}
