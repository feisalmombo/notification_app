import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../services/investments.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-investments',
  templateUrl: './investments.page.html',
  styleUrls: ['./investments.page.scss'],
})
export class InvestmentsPage implements OnInit {
  investmentService: any = [];
  investmentsData: any = [];
  shownInvestments: any = [];
  queryText = '';
  segment = 'all';

  constructor(
    public InvestmentService: InvestmentsService,
    public router: Router,
    public loadingController: LoadingController
) { }

  ngOnInit() {
    this.updateInvestment();
    }

   updateInvestment() {
    this.InvestmentService.getInvestmentLine(this.queryText, this.segment).subscribe((data: any) => {
          this.investmentsData =  data.data;
          this.shownInvestments = data.data.length;
        });
  }
  goMoDetails(investment: any){
    this.InvestmentService.setInvestmentData(investment);
    this.router.navigate(['tabs/investment-details']);

  }
}
