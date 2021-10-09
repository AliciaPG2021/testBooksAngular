import { Component, OnInit } from '@angular/core';
import { authors } from 'interfaces/authors.interface';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  arrAuthors: authors[];

  constructor(private authorsService: AuthorsService) { }


  ngOnInit(): void {
    this.authorsService.getAllAuthors()
      .then(response => {
        console.log(response);
        this.arrAuthors = response;

      })
      .catch(error => console.log(error))
  }

}
