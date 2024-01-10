import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

export const routes: Routes = [
    { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent },
  { path: 'contacts', title: 'Contacts Page', component: ContactsComponent },

  { path: 'notes/lists', component: NotesListComponent },
  { path: 'notes/new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];
