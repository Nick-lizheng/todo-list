import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private http = inject(HttpClient);
  private baseUrl = '/api/todos'; // 使用代理或同源部署

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  add(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, { title });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
