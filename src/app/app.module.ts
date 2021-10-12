import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsFormularioComponent } from './components/authors-formulario/authors-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { AuthorModificarComponent } from './components/author-modificar/author-modificar.component';
import { BooksModificarComponent } from './components/books-modificar/books-modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DetailComponent,
    FormularioComponent,
    AuthorsComponent,
    AuthorsFormularioComponent,
    AuthorDetailComponent,
    AuthorModificarComponent,
    BooksModificarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
