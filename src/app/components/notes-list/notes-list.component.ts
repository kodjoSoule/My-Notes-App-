import { Component } from '@angular/core';
import { NOTES } from '../../../notes';
@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notes = NOTES;

}
