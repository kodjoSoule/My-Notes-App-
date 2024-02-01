import { Component, Inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../../notes';
import { DatePipe } from '@angular/common';
// ng-container

import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule, DatePipe, NgxPaginationModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent2 {
  notes: Note[] = [];
  newNote: Note = { id: 0, title: '', content: '', date: new Date() };
  p: number = 1; // Page par défaut

  pageOfItems: Array<any> | undefined;
  total: number = 0;

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

  // pageChangeEvent(event: number) {
  //   this.p = event;
  //   this.notes = this.noteService.getNotes();
  // }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
