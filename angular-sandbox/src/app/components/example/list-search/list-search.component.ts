import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  movies: Array<Movie> = [];
  ngOnInit() {
    console.log("this.movies 1 = \n" + JSON.stringify(this.movies));
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      // this.movies= data.results;

      data.forEach(element => {
        this.movies.push(new Movie(element.title))
      });
      console.log("this.movies 2 = \n" + JSON.stringify(this.movies));
      console.log("this.movies.length = " + this.movies.length)

    });

  }

}
