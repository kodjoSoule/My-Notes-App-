import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule , FormsModule, FormGroup, Validators } from '@angular/forms';

import { FormSkillsComponent } from '../form-skills/form-skills.component';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormSkillsComponent,

  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  //attributs
  email : string ;
  password : string ;

  name : string;
  address : string;

  registerForm: FormGroup;


  nameskillControl: FormControl;
  emailControl =new FormControl('example@mail.com');

  // registerForm: FormGroup;
  //constructeur
  constructor(){
    this.email = '';

    this.password = '';
    this.name = 'Kodjo Souleymane';
    this.address = 'Lomé';

    //forms control
    this.nameskillControl = new FormControl('Skills off', Validators.required);
    // Initialisation du formulaire réactif
    this.registerForm = new FormGroup({
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      nameControl: new FormControl('', Validators.required),
      addressControl: new FormControl('', Validators.required),
    });


  }
  ngOnInit(): void {
    console.log('Le composant Forms a été initialisé.');
  }
submitForm() {
  alert('Form submitted \n Email : ' + this.email + '\n Password : ' + this.password);
}
submitFormEdit(){

}
showSkills(){
  alert('showSkills');
}
resetForm(){
  // Réinitialisation des valeurs du formulaire
  this.registerForm.reset({
    emailControl: '',
    passwordControl: '',
    nameControl: '',
    addressControl: '',
  });
}



}
