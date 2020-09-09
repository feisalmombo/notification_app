import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { NotificationsService } from '../services/notifications.service';
import { Observable } from 'rxjs';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // tslint:disable-next-line: variable-name
  badge_no$: any;
  obs$;
  // tslint:disable-next-line: typedef-whitespace
  JSON: any;
  // tslint:disable-next-line: variable-name
  badge_no: any;
  notifications: any;

  constructor(
    public events: Events,
    private nots: NotificationsService,
    public fcm: FCM) {
      this.badge_no = 0;
            // console.log("tabs ts");
            // tslint:disable-next-line: align
      this.JSON = JSON;
      this.badge_no$ = this.fcm.onNotification();
      this.fcm.onNotification().subscribe(data => {
              console.log(JSON.stringify(data));
              // tslint:disable-next-line: radix
              this.badge_no = parseInt(data.badgeNo);
              if (data.wasTapped) {
              }
            });
      this.obs$ = new Observable(subscriber => {
              setInterval(() => subscriber.next(this.badge_no), 1000);
       });

}


}
