import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { authors } from 'interfaces/authors.interface';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  authorId: authors;

  constructor(private authorsService: AuthorsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): any {
    this.activatedRoute.params.subscribe(async (params) => {
      this.authorId = await this.authorsService.getById(parseInt(params.authorId))
      //console.log(this.productoId);

    });
  };

}
