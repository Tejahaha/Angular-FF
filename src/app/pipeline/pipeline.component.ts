import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.css'
})
export class PipelineComponent {
  currentDate = new Date();
  price = 42.99;
  decimalNumber = 123.456789;
  text = '';
  percentage = 0.7589;
  user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };

  onTextChange(event: any) {
    this.text = event.target.value;
  }
}
