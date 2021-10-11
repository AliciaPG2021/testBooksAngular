import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { authors } from 'interfaces/authors.interface';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-modificar',
  templateUrl: './author-modificar.component.html',
  styleUrls: ['./author-modificar.component.css']
})
export class AuthorModificarComponent implements OnInit {

  author: authors;

  formulario: FormGroup;


  constructor(private authorsService: AuthorsService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.author = await this.authorsService.getById(parseInt(params.authorId))

      this.formulario = new FormGroup({
        first_name: new FormControl(this.author.first_name),
        last_name: new FormControl(this.author.last_name),
      })

    });
  }

  async onSubmit() {

    const resultado = await this.authorsService.updateAuthor(this.author.id, this.formulario.value);


    if (resultado) {
      alert('autor modificado');
      this.router.navigate(['/author']);
    } else (resultado['autor no modificado']);

  }
}
