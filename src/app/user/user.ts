import { Component, Input, Output, EventEmitter, 
  output, signal, input, computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
import { CommonModule } from '@angular/common';

// type UserT = {
//     id: string, 
//     name: string, 
//     avatar: string
//   }

interface IUser {
  id: string, 
  name: string, 
  avatar: string
}
// const randomIndex = Math.floor(Math.random() * 6);
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: IUser
  // @Input({required: true}) user!: {
  //   id: string, 
  //   name: string, 
  //   avatar: string
  // }

  @Output() select = new EventEmitter<string>();

  // using output function
  //select = output<string>();

  // //using signal inputs
  // avatar = input.required<string>();
  // name = input.required<string>();

  // getImagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  getImagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  //avatar = input<string>('');

  // users = DUMMY_USERS;
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  //getImagePath(id: any){
    // const userImagePath = this.users.find(i => i.id === id);
    // if (userImagePath && userImagePath.avatar) {
    //   return 'assets/users/' + userImagePath.avatar;
    // }
    // return 'no user found!';
  //}

  //for understanding singals and event binding
  onSelectUser(){
    this.select.emit(this.user.id);

    // const randomIndex = Math.floor(Math.random() * 6);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log(this.selectedUser);
  }
}
