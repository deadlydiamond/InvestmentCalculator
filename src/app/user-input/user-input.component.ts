import {Component, EventEmitter, Output} from '@angular/core';
import {InvestmentInput} from "../models/user-input.model";
import {InvestmentService} from "../services/investment.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 5;
  enteredDuration = 10;
  @Output() calculate = new EventEmitter<InvestmentInput>()

  constructor(private investmentService: InvestmentService) {

  }

  onSubmit() {
    const enteredData: InvestmentInput = {
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn :this.enteredExpectedReturn,
      duration :this.enteredDuration,
    }
    this.investmentService.onCalculateInvestments(enteredData);
    this.enteredInitialInvestment = 0;
    this.enteredAnnualInvestment = 0;
    this.enteredExpectedReturn = 5;
    this.enteredDuration = 10;
  }
}
