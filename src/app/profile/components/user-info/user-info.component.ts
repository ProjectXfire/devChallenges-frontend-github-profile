import { Component, Input } from '@angular/core';
import { GithubService } from '@app/core/services';
import { DataFieldComponent } from '@app/shared/components';

export type TValue = {
  field: string;
  value: string;
};

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [DataFieldComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  constructor(public githubService: GithubService) {}
}
