import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors-formulario',
  templateUrl: './authors-formulario.component.html',
  styleUrls: ['./authors-formulario.component.css']
})
export class AuthorsFormularioComponent implements OnInit {

  formulario: FormGroup;


  constructor(private authorsService: AuthorsService, private router: Router) {
    this.formulario = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
    })
  }

  ngOnInit(): void {
  }


  // checkControl(controlName, validatorName) {
  //   return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  // }
  async onSubmit() {
    const response = await this.authorsService.create(this.formulario.value);
    console.log(response);

    if (response['affectedRows'] === 1) {

      alert('autor insertado');
      this.formulario.reset();
      this.router.navigate(['/authors']);


    }

  }

}
