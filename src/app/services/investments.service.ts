import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  data: any;
  notf_data: any;
  loading:any;
  data_http: any;

  constructor(public http: HttpClient,
              public fcm: FCM,
              public events: Events,
              public loadingController: LoadingController,
              public router: Router) {
                this.createLoader();
               }

  loadInvestments(): any {
    if (this.data) {
      return of(this.data);
    } else {      
      return this.http
        .get('http://admin.mrkuku.co.tz/api/mobile/investments.php')
        .pipe(map(this.processInvestments, this));

        
    }
  }


  filterInvestments(investmentsData, queryWords: string[], segment: string){
    let matchesQueryText = false;

    if (queryWords.length) {
      queryWords.forEach((queryWord: string) => {
        if (investmentsData.project.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {          
      matchesQueryText = true;
    }

    // Filter segment
    let investHide = false;
    let i = 0;        
    investmentsData.investments.forEach((data: any) => {        
      if(segment == "all"){
       
        i++;
      }else{
          if (data.status == segment) {
              investHide = false;
              i++;
            }else{
              investHide = true;
            }
      }
          data.hide = investHide;
      }); 

      if(i < 1 ){
        matchesQueryText = false;
      }       
    investmentsData.hide = !(matchesQueryText);
}

getInvestmentLine(
    queryText = '',
    segment = 'all'
    ) {
 
     return this.loadInvestments().pipe(
       map((data: any) => {     
         queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
         const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
         
         data.forEach((inv: any) => {
           this.filterInvestments(inv,queryWords,segment);
         });      
         return this;
       })
     );    
 }
async createLoader(){
  this.loading = await this.loadingController.create({
    message: 'Loading Data'
  });

}
 processInvestments(data: any) {
  this.data = data;
  return this.data;
}

setInvestmentData(data: any) {
  // console.log(data);
  this.data = data;
  return this.data;
}
getInvestmentData() {
  return this.data;
}
}
