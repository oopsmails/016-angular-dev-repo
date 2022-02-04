import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../loading-stencil.model';

@Component({
  selector: 'app-loading-simple',
  templateUrl: './loading-simple.component.html',
  styleUrls: ['./loading-simple.component.scss']
})
export class LoadingSimpleComponent implements OnInit {

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
