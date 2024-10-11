import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
  library: Book[] = [];

  constructor() {}
}
