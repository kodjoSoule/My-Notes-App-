import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TestComponent } from './components/test/test.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { FormsComponent } from './components/forms/forms.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { DonneesService } from './services/donnees.service';
import { TestBootstrapComponent} from './components/test-bootstrap/test-bootstrap.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NgFor,
    TestComponent,
    TestBootstrapComponent,
    NotesListComponent,
    FormsComponent,
    ButtonComponent,
    FooterComponent,

  ],
  providers: [DonneesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isShowTest = false;
}
