import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.sass']
})
export class RepoComponent implements OnInit {
  repo;
  lang;
  constructor(private activateRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.appService.getRepo(data.owner, data.repo).subscribe((repo: any) => {
        this.repo = repo;
        this.lang = this.appService.getFromUrl(repo.languages_url);
      });
    });
  }
  isEmptyObject(obj) {
    return obj && !!Object.keys(obj).length;
  }
}
