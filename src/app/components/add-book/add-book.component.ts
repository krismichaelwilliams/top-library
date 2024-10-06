import { Component } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent {
  library: Book[] = [];

  onAddBook(book: Book) {
    this.library.push(book);
  }
}
