import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../services/investments.service';


@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.page.html',
  styleUrls: ['./investment-details.page.scss'],
})
export class InvestmentDetailsPage implements OnInit {
  data: any = [];
  public investmentsSize: number;
  segment = 'info';
  constructor(  public Investments_service: InvestmentsService) { }

  ngOnInit() {
    this.updateInvesDet();
  }
  
  updateInvesDet(){
    this.data = this.Investments_service.getInvestmentData();
    this.investmentsSize =  this.data.length;
  }
  
    
}
