import { Injectable } from '@angular/core';
import {InvestmentInput} from "../models/user-input.model";
import {InvestmentResultsModel} from "../models/investment-results.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  annualData!: InvestmentResultsModel[];

  constructor() { }

  onCalculateInvestments(data: InvestmentInput) {
    const annualData: InvestmentResultsModel[] = [];
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.annualData = annualData;
  }
}
