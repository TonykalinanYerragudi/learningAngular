import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * 6);
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  users = DUMMY_USERS;
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  getImagePath(id: any){
    const userImagePath = this.users.find(i => i.id === id);
    if (userImagePath && userImagePath.avatar) {
      return 'assets/users/' + userImagePath.avatar;
    }
    return 'no user found!';
  }

  //for understanding singals and event binding
  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * 6);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log(this.selectedUser);
  }
}
