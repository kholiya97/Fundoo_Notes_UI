import { Component, OnInit } from '@angular/core';
import { Note } from './createnotes.model';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  panelOpenState = false;
  notes = new Note()
  constructor() { }

  ngOnInit(): void {
  }
  onCloseClick() {
    return this.panelOpenState = !this.panelOpenState

}
submit() {
  // this.panelOpenState = !this.panelOpenState
  // this.service1.addNote(this.notes).subscribe(res => {
  //   this.service.sendMessage("addedNote")
  // }, err => {

  // })
}
}
