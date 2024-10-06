import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { Random } from 'random-test-values';
import { Book } from '../../models/book.model';
import { BrowseComponent } from './browse.component';

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addBook', () => {
    it('should add one book to library', fakeAsync(() => {
      // Arrange
      let book: Book = {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        pages: 500,
        isRead: true,
      };

      // Act
      component.onAddBook(book);

      // Assert
      expect(component.library).toEqual([book]);
    }));

    it('should retain all existing books when a new book is added', () => {
      // Arrange
      component.library = getLibrary(5);
      let book = getBook();
      let expectedResult = [...component.library, book];

      // Act
      component.onAddBook(book);

      // Assert
      expect(component.library).toEqual(expectedResult);
    });
  });
});

function getBook(): Book {
  return {
    title: Random.String(),
    author: Random.String(),
    pages: Random.Number(),
    isRead: Random.Boolean(),
  };
}

function getLibrary(numberOfBooks: number): Book[] {
  let output: Book[] = [];

  for (let i = 0; i < numberOfBooks; i++) {
    output.push({
      title: Random.String(),
      author: Random.String(),
      pages: Random.Number(),
      isRead: Random.Boolean(),
    });
  }

  return output;
}
