import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  //attributs
  email : string ;
  password : string ;

  //constructeur
  constructor(){
    this.email = '';
    this.password = '';
  }
  ngOnInit(): void {
    console.log('Le composant Forms a été initialisé.');
  }
submitForm() {
  alert('Form submitted \n Email : ' + this.email + '\n Password : ' + this.password);
}
submitFormEdit(){

}
resetForm(){
  this.email = '';
  this.password = '';
}
}
