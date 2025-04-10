import { Component, OnInit } from '@angular/core';
import { StudentService, StudentProfile } from '../services/student.service';

@Component({
  selector: 'app-api-call',
  standalone: false,
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent implements OnInit {
  students: StudentProfile[] = [];
  loading = false;
  error: string | null = null;
  editingStudent: StudentProfile | null = null;
  addingStudent = false;
  newStudent: Omit<StudentProfile, 'id'> = {
    studentID: '',
    studentName: '',
    studentGrade: '',
    studentProfilePicture: '',
    academicYear: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.loading = true;
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
        this.addingStudent = false;
      },
      error: (err) => {
        this.error = 'Error loading students';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  editStudent(student: StudentProfile) {
    this.editingStudent = { ...student };
  }

  saveChanges() {
    if (this.editingStudent) {
      this.studentService.updateStudent(this.editingStudent).subscribe({
        next: () => {
          this.loadStudents();
          this.editingStudent = null;
        },
        error: (err) => {
          this.error = 'Error updating student';
          console.error('Error:', err);
        }
      });
    }
  }

  cancelEditing() {
    this.editingStudent = null;
  }

  showAddForm() {
    this.addingStudent = true;
  }

  cancelAdding() {
    this.addingStudent = false;
    this.resetNewStudent();
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.loadStudents();
        },
        error: (err) => {
          this.error = 'Error deleting student';
          console.error('Error:', err);
        }
      });
    }
  }

  addStudent() {
    if (!this.newStudent.studentID || !this.newStudent.studentName) {
      this.error = 'Please fill in at least Student ID and Name';
      return;
    }
    this.loading = true;
    this.error = null;
    this.studentService.createStudent(this.newStudent).subscribe({
      next: () => {
        this.loadStudents();
        this.resetNewStudent();
        this.loading = false;
        this.addingStudent = false;
      },
      error: (err) => {
        this.error = 'Error adding student';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  resetNewStudent() {
    this.newStudent = {
      studentID: '',
      studentName: '',
      studentGrade: '',
      studentProfilePicture: '',
      academicYear: '',
      email: '',
      phone: '',
      address: ''
    };
  }
}
