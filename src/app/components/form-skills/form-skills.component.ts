import { Component, OnInit , } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl, ReactiveFormsModule , FormsModule, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-skills',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormSkillsComponent,
  ],
  templateUrl: './form-skills.component.html',
  styleUrl: './form-skills.component.css'
})
export class FormSkillsComponent implements OnInit {
    skillsForm : FormGroup;
    nameValue : string = '';
    levelValue : string = '';
    experienceValue : string = '';

    // Définissez vos FormControl ici
    experienceControl: FormControl = new FormControl('Experience ', Validators.required);
    nameControl: FormControl =  new FormControl('Name ', Validators.required);
    levelControl: FormControl =  new FormControl('Level ', Validators.required);

    constructor(private fb: FormBuilder, private cd: ChangeDetectorRef){
    this.skillsForm  =this.fb.group({
      experienceControl: this.experienceControl,
      nameControl: this.nameControl,
      levelControl: this.levelControl,
    });
  }
  ngOnInit(): void {
    console.log('Le composant Forms a été initialisé.');
  }
  onSubmit() {
    const { experienceControl, nameControl, levelControl } = this.skillsForm.value;
    alert('Form submitted \n Experience : ' + experienceControl + '\n Name : ' + nameControl + '\n Level : ' + levelControl);
  }
  onReset() {
    this.skillsForm.reset();
  }

}
