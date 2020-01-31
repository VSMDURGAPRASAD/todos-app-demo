import { Component, OnInit } from '@angular/core';

import {ITodo} from '../../interfaces/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
 isLoading:boolean =false;
 todos:ITodo[] =[];

  constructor(private todoService:TodoService ) { }

  ngOnInit() {
    this.isLoading =true;
    this.todoService.getTodos().subscribe((data :ITodo[])=>{
      this.isLoading =false;
      console.log('Server Resposne ',data);
      this.todos =data ;
    });
    
  }

}
