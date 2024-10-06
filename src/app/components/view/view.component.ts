import { Component } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { BrowseComponent } from '../browse/browse.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [BrowseComponent, AddBookComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {}
