import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { books } from 'interfaces/books.interface';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/books'
  }


  //Todos los libros --->  GET http://localhost:3000/api/libros

  getAllBooks(): Promise<books[]> {
    return this.httpClient.get<books[]>(this.baseUrl).toPromise();
  }



  //Crear libros nuevos ---> POST http://localhost:3000/api/books

  createBook(formValues) {

    return this.httpClient.post(this.baseUrl, formValues).toPromise();

  }


  //Buscar libro autor por Id ---> GET http://localhost:3000/api/books/id
  getBookById(pId: number) {
    return this.httpClient.get<books>(`${this.baseUrl}/${pId}`).toPromise();
  }

}
