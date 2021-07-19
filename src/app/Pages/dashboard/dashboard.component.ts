import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName = "Himanshu";
  isMenuOpen = false;
  open=false;
  contentMargin = 240
  data: any
  hide = true;
  errors:any;

  constructor() { }
  arr:any;
  
  onToolBarToggle() {
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    } else {
      this.contentMargin = 240;
    }
  }
  get f() { return this.myForm.controls; }

  myForm = new FormGroup({
    title:new FormControl(),
    note:new FormControl(),
  })
  
  close(){
    let data = {
      "title": this.f.title.value,
      "note":this.f.note.value
    }
      this.arr.push(data);
  }
 
  ngOnInit(): void {
    this.arr = [{"title":"jai","note":"jai shri ram"},{"title":"hi","note":"i love coding"}];}

  submit() {}

  onTrashClick() {
    this.arr.pop();
  }

  onNotesClick() {}

  onArchiveClick() {}
  openbox() {
    this.open=!this.open;
  }
  

}
