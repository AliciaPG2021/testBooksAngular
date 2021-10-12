import { Component, Input, OnInit } from '@angular/core';
import { books } from 'interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input() book: books;

  arrBooks: books[];

  constructor(private booksService: BooksService) { }




  ngOnInit(): void {
    this.booksService.getAllBooks()
      .then(response => {
        console.log(response);
        this.arrBooks = response;

      })
      .catch(error => console.log(error))
  }
}
