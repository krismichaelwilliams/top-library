import { Component } from '@angular/core';
import { BrowseComponent } from '../browse/browse.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [BrowseComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {}
