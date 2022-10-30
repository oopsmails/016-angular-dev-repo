import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/student.model"
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  /**
   * this method returns students details
   */
  getStudentsInformation(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${environment.baseURL}student.json`);
  }
}
