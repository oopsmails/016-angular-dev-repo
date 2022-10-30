import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from './model/student.model';
import { StudentService } from './service/student.service';

@Component({
  selector: 'student',
  templateUrl: './student.component2.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public displayedColumns = ['firstName', 'lastName', 'studentEmail', 'yearOfStudy', 'registrationNumber', 'course'];
  public dataSource = new MatTableDataSource<Student>();

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.getStudentsInformation();
  }
  /**
   * this method returns students details
   */
  getStudentsInformation() {
    this.studentService.getStudentsInformation()
      .subscribe((res) => {
        //console.log(res);
        this.dataSource.data = res;
      })
  }
}
