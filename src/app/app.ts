import { Component, signal, Input } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learningAngular');
  users = DUMMY_USERS;
  user = ''

  onSelectUser(id: string) {
    // console.log('selected User: ' + id);
    const userselected = this.users.find(user => user.id === id);
    this.user = userselected!.name;
  }
}
