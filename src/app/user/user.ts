import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  users = DUMMY_USERS;

  getImagePath(id: any){
    const selectedUser = this.users.find(i => i.id === id);
    if (selectedUser && selectedUser.avatar) {
      return 'assets/users/' + selectedUser.avatar;
    }
    return '';
  }
}
