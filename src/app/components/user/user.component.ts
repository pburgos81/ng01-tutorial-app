import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email: string;
  address:Address;
  hobbies:string[];

  constructor() {

  }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = '';
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Listen to music', 'Wath movies'];
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i<this.hobbies.length; i++){
      if (this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}
