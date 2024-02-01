import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule , FormsModule, FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Note } from '../../../notes';
import { NoteService } from '../../services/note.service';
@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit{
// Attributs
addNoteForm: FormGroup;
notes: Note[] = [];
// Méthodes
constructor(private formBuilder: FormBuilder, private noteService : NoteService) {
  // Initialisation du formulaire réactif
  this.addNoteForm = this.formBuilder.group({
    title: new FormControl('', Validators.required),
    auteurs: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contents: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  this.notes = this.noteService.getNotes();
}

get f() {
  return this.addNoteForm.controls;
}

ngOnInit(): void {
  console.log('Le composant add-note a été initialisé.');
}

onSubmit() {
  console.log(this.addNoteForm.value);
  this.noteService.addNote({
    id: this.notes.length + 1,
    title: this.addNoteForm.value.title,
    content: this.addNoteForm.value.contents,
    date: new Date()
  });

}

onReset() {
  this.addNoteForm.reset();
}
showAddNote() {
  alert('Add Note : ' + this.addNoteForm.value.title + ' ' + this.addNoteForm.value.auteurs + ' ' + this.addNoteForm.value.text);
}
}