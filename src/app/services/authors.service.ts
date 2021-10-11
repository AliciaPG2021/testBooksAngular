import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authors } from 'interfaces/authors.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/authors'
  }


  //Todos los autores --->  GET http://localhost:3000/api/authors

  getAllAuthors(): Promise<authors[]> {
    return this.httpClient.get<authors[]>(this.baseUrl).toPromise();
  }



  //Crear autores nuevos ---> POST http://localhost:3000/api/authors

  create(formValues) {

    return this.httpClient.post(this.baseUrl, formValues).toPromise();

  }

  //Buscar autor por Id ---> GET http://localhost:3000/api/authors/5
  getById(pId: number) {
    return this.httpClient.get<authors>(`${this.baseUrl}/${pId}`).toPromise();
  }

  //Método modificar producto --> PUT http://localhost:3000/api/authors/5


  updateAuthor(pId, pAuthor) {
    return this.httpClient.put(`${this.baseUrl}/${pId}`, pAuthor).toPromise();
  }

}
