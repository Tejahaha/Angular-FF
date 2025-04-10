import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface StudentProfile {
  id: number;
  studentID: string;
  studentName: string;
  studentGrade: string;
  studentProfilePicture: string;
  academicYear: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<StudentProfile[]> {
    return this.http.get<StudentProfile[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.apiUrl}/${id}`);
  }

  createStudent(student: Omit<StudentProfile, 'id'>): Observable<StudentProfile> {
    return this.http.post<StudentProfile>(this.apiUrl, student);
  }

  updateStudent(student: StudentProfile): Observable<StudentProfile> {
    return this.http.put<StudentProfile>(`${this.apiUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}