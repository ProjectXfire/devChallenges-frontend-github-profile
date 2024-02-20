import { Component } from '@angular/core';
import { CardRepoComponent } from '../card-repo/card-repo.component';
import { GithubService } from '@app/core/services';
import { updatedDays } from '@app/shared/helpers';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [CardRepoComponent],
  templateUrl: './user-repos.component.html',
  styleUrl: './user-repos.component.css',
})
export class UserReposComponent {
  constructor(public githubService: GithubService) {}

  transformDate(date: string): number {
    return updatedDays(date);
  }
}
