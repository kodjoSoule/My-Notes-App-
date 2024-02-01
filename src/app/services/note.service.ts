import { Injectable } from '@angular/core';
import { Note } from '../../notes';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    { id: 1, title: 'Note 1', content: 'Contenu de la note 1' , date: new Date('2021-01-01')},
    { id: 2, title: 'Note 2', content: 'Contenu de la note 2' , date: new Date('2021-01-02')},
    { id: 3, title: 'Note 3', content: 'Contenu de la note 3' , date: new Date('2021-01-03')},
{ id: 4, title: 'Note 4', content: 'Contenu de la note 4' , date: new Date('2021-01-04')},
{ id: 5, title: 'Note 5', content: 'Contenu de la note 5' , date: new Date('2021-01-05')},
{ id: 6, title: 'Note 6', content: 'Contenu de la note 6' , date: new Date('2021-01-06')},
{ id: 7, title: 'Note 7', content: 'Contenu de la note 7' , date: new Date('2021-01-07')},
  ];
  constructor() {
    for(let i=8;i<15000;i++){
      this.notes.push({id:i,title:'Note'+i,content:'Contenu de la note'+i,date:new Date()});
       }
  }
  getNotes(): Note[] {

    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
