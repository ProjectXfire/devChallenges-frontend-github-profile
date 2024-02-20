import { Component, OnInit } from '@angular/core';
import { GithubService } from '@app/core/services';
import { UserInfoComponent, UserReposComponent } from '@app/profile/components';
import { gitHub } from '@app/shared/mock';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserInfoComponent, UserReposComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(public githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.setProfile = gitHub;
  }
}
