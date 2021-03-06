import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable(
  
)
export class TodoService {
 apiUrl:string =environment.apiUrl;

  constructor(private http:HttpClient) { }

  getTodos():Observable<ITodo[]>{
   return this.http.get(`${this.apiUrl}/todos`).pipe(
     map(data =>{
       return data as ITodo[];
     })
   );
  }
}
