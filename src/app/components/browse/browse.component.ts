import { Component } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
  library: Book[] = [];

  onAddBook(book: Book) {
    this.library.push(book);
  }
}
