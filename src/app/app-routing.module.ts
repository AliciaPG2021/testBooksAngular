import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { AuthorsFormularioComponent } from './components/authors-formulario/authors-formulario.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BooksComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'newBook', component: FormularioComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:authorId', component: AuthorDetailComponent },
  { path: 'newAuthor', component: AuthorsFormularioComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
