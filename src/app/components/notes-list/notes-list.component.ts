import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../../notes';
import { DatePipe } from '@angular/common';
// ng-container

import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule, DatePipe, NgxPaginationModule, CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes: Note[] = [];
  newNote: Note = { id: 0, title: '', content: '', date: new Date() };
  p: number = 1; // Page par défaut

  constructor(private noteService : NoteService) {
    this.notes = this.noteService.getNotes();
   }
   addNote(): void {
    this.noteService.addNote(this.newNote);
    this.newNote = { id: 0, title: '', content: '', date : new Date() }; // Réinitialiser le formulaire
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }

  show(title: string) {
    alert(title);
  }


}
