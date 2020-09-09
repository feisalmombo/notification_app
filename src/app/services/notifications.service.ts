import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FCM } from '@ionic-native/fcm/ngx';
import {Observable,of, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  badgeNo: any = 0;
  public myBadge;
  // private boolSubject: Subject<boolean>;

    
    constructor(public http: HttpClient,
      public fcm: FCM) {
        this.startNot();
       }

  getNotifications() {
    return  this.http.get('http://admin.mrkuku.co.tz/api/mobile/notifications.php');
  }


startNot(){
  this.fcm.subscribeToTopic('notifications');
  
  
}

}
