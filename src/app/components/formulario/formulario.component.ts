import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authors } from 'interfaces/authors.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  authors: authors[];

  formulario: FormGroup;

  constructor(private booksService: BooksService, private router: Router, private authorsService: AuthorsService) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ISBN: new FormControl(),

    })

    this.authors = [];
  }

  ngOnInit(): void {



    this.authorsService.getAllAuthors()
      .then(response => {
        this.authors = response
      })
      .catch(error => console.log(error))

  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  }
  async onSubmit() {
    const response = await this.booksService.createBook(this.formulario.value);
    console.log(response);

    if (response['affectedRows'] === 1) {

      alert('Libro insertado');
      this.formulario.reset();
      this.router.navigate(['/books']);


    }

  }

}







