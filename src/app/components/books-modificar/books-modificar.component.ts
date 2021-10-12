import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { authors } from 'interfaces/authors.interface';
import { books } from 'interfaces/books.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-modificar',
  templateUrl: './books-modificar.component.html',
  styleUrls: ['./books-modificar.component.css']
})
export class BooksModificarComponent implements OnInit {

  authors: authors[];
  books: books;
  formulario: FormGroup;

  constructor(private authorsService: AuthorsService, private booksService: BooksService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authors = [];
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async (params) => {
      this.books = await this.booksService.getBookById(parseInt(params.bookId))

      this.formulario = new FormGroup({
        name: new FormControl(this.books.name),
        ISBN: new FormControl(this.books.ISBN),
        fk_author: new FormControl(this.books.fk_author),
      })

    });

    this.authorsService.getAllAuthors()
      .then(response => {
        this.authors = response
      })
      .catch(error => console.log(error))
  }

  async onSubmit() {

    const resultado = await this.booksService.updateBook(this.books.id, this.formulario.value);


    if (resultado) {
      alert('libro modificado');
      this.router.navigate(['/']);
    } else (resultado['libro no modificado']);

  }

}
