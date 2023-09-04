import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskarray = [
    {
      taskname:'brush teeth', iscompleted: false
    }
  ];

 
  i!: number;
  onsubmit(form: NgForm){
    // console.log(form)

    this.taskarray.push({
      taskname: form.controls['task'].value,
      iscompleted: false
    })

    form.reset();
  }

  ondelete(index: number){
    // console.log(index)
    this.taskarray.splice(index,1)
  }

  onchek(index:number){

    this.taskarray[index].iscompleted = !this.taskarray[index].iscompleted;
  }
}
