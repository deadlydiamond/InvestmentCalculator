import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  // @ts-ignore
  applyForm: FormGroup;

  submitApplication() {

  }
}
