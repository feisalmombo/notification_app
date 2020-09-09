import { Component, OnInit } from '@angular/core';
import { NotificationsService} from '../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;
  constructor(private nots: NotificationsService
    ) { }

  ngOnInit() {
      this.nots.getNotifications().subscribe((data: any) => {
        console.log(data);
        this.notifications = data;
      });
  }


}
