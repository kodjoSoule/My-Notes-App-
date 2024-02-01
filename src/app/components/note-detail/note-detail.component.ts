import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../../notes';


@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  Router = inject(Router);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  notes : Note[] = [];
  note : Note | undefined;

  constructor(private notService : NoteService) {
    this.notes = this.notService.getNotes();
    this.note = this.notes.find((i: Note) => i.id === this.id);
   }
  }

  // navigator(){
  //   this.router.navigateByUrl('/notes/lists');
  // };

