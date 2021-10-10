import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { books } from 'interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  bookId: books;

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): any {
    this.activatedRoute.params.subscribe(async (params) => {
      this.bookId = await this.booksService.getBookById(parseInt(params.bookId))
      //console.log(this.productoId);

    });
  };
}
