import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';
@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit{
  //attributs
    id: number;
    title: string;
    text: string;
    date: Date;
  //constructeur
  constructor( private donneesService: DonneesService){
    this.id = 0;
    this.title = '';
    this.text = '';
    this.date = new Date();
  }
  ngOnInit(): void {
    console.log('Le composant Note a été initialisé.');
  }
}
