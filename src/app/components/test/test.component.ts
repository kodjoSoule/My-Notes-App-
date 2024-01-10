import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  isShowTest : boolean  ;
  title : string ;
  name : string ;
  password : string ;
  autherName = '';
  inputVal : string ;
  imageLink : string ;
  inputName : string ;
  isHighlighted : boolean ;
  myClasses : string[] ;
  btnName : string ;
  isRed : boolean ;
  available : boolean ;
  inStock : boolean ;
  products : string[] ;



  constructor(){
    this.title = 'project-1-notes';
    this.isShowTest = false;
    this.name = 'Kodjo Souleymane';
    this.password = '';
    this.inputVal = 'Kodjo Souleymane';
    this.imageLink = 'https://picsum.photos/200/300';
    this.inputName = 'attribute binding';
    this.isHighlighted = true;
    this.myClasses= ['highlighted', 'bordered'];
    this.btnName = 'Click me';
    this.isRed = false;
    this.available = true;
    this.inStock = true;
    this.products = ['product1', 'product2', 'product3'];
  }



  ngOnInit(): void {
    console.log('Le composant a été initialisé.');
  }
  login() {
    this.loggedIn = true;
    alert('Welcome to the app');
  }
logout() {
  this.loggedIn = false;
  alert('Goodbye');
}
  loggedIn = false;
  //change bg color
  changeBgColor() {
    this.isRed = !this.isRed;
  }
  changeTitle() {
    this.title = 'New title';
  }
  submit(){
    alert('Form submitted');
  }
}
