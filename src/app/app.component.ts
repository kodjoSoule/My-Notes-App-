import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'project-1-notes';
  name = 'Kodjo Souleymane';
  inputVal = 'Kodjo Souleymane';
  imageLink = 'https://picsum.photos/200/300';
  inputName = 'attribute binding';
  isHighlighted = true;
}
