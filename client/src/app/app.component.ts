import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <main class="container">
    <h1>TODO List</h1>

    <form (ngSubmit)="onAdd()" class="row">
      <input [(ngModel)]="title" name="title" placeholder="What needs to be done?" required />
      <button type="submit">Add</button>
    </form>

    <ul class="list">
      <li *ngFor="let t of todos()">
        <span>{{ t.title }}</span>
        <button (click)="onDelete(t.id)">Delete</button>
      </li>
    </ul>
  </main>
  `,
  styles: [`
    .container { max-width: 600px; margin: 2rem auto; font-family: system-ui, Arial; }
    .row { display: flex; gap: .5rem; margin-bottom: 1rem; }
    input { flex: 1; padding: .5rem; }
    button { padding: .5rem .75rem; }
    .list { list-style: none; padding: 0; margin: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: .5rem 0; border-bottom: 1px solid #eee; }
  `]
})
export class AppComponent implements OnInit {
  todos = signal<Todo[]>([]);
  title = '';

  constructor(private api: TodoService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.api.list().subscribe(data => this.todos.set(data));
  }

  onAdd(): void {
    const t = this.title.trim();
    if (!t) return;
    this.api.add(t).subscribe(() => { this.title = ''; this.load(); });
  }

  onDelete(id: string): void {
    this.api.delete(id).subscribe(() => this.load());
  }
}
