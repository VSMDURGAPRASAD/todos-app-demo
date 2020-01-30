import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
 isLoading:boolean =false;
 todos:any[] =[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.isLoading =true;
    this.http.get('https://todos-api-dev.herokuapp.com/todos').subscribe(data =>{
      this.isLoading =false;
      console.log('Server Resposne ',data);
      this.todos =data as any[];
    });
    
  }

}
