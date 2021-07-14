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
  contentMargin = 240
  data: any
  // arr: any
  // length: any
  // trashClick = false
  // notesclick = false
  // archiveClick = false
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
    this.arr = [{"title":"harshpal","notes":"jai shri ram"},{"title":"hi","notes":"i love coding"}
   
    ];}
  submit() {
    // this.dataservice.getNotes().subscribe(res => {
    //   this.data = res
    //   this.arr = this.data.data
    //   this.arr = this.arr.reverse()
    //   this.length = this.arr.length
    //   return this.length

    // })
  }
  onTrashClick() {
    this.arr.pop();
  //   this.trashClick = !this.trashClick
  //   if (this.trashClick == true) {
  //     this.route.navigate(['dashboard/trash']);
  //     return this.trashClick = false
  //   }
  }

  onNotesClick() {
    // this.notesclick = !this.notesclick
    // if (this.notesclick == true) {
    //   this.route.navigate(['dashboard/notes']);
    //   return this.notesclick = false
    // }
  }
  onArchiveClick() {
    
      // this.archiveClick = !this.archiveClick
      // if (this.archiveClick == true) {
      //   this.route.navigate(['dashboard/archive']);
      //   return this.archiveClick = false
      }
    }


 // this.archiveClick = !this.archiveClick
      // if (this.archiveClick == true) {
      //   this.route.navigate(['dashboard/archive']);
      //   return this.archiveClick = false