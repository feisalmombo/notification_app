import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public http: HttpClient) { }

  getProjects() {
    return  this.http.get('http://admin.mrkuku.co.tz/api/mobile/projects.php');
  }

}
