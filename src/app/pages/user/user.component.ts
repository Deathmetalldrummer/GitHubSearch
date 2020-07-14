import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user;
  repos;
  constructor(private activateRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.appService.getUser(data.id).subscribe((user: any) => {
        this.user = user;
        this.repos = this.appService.getFromUrl(user.repos_url);
      });
    });
  }

}
