import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { MaxTextPipe } from '@app/shared/pipes';

export type TCardData = {
  projectName: string;
  description: string;
  forks: number;
  watchers: number;
  updatedAt: number;
  license: null | string;
  html_url: string;
};

@Component({
  selector: 'app-card-repo',
  standalone: true,
  imports: [MaxTextPipe, CommonModule],
  templateUrl: './card-repo.component.html',
  styleUrl: './card-repo.component.css',
})
export class CardRepoComponent {
  maxText = 180;
  show: boolean = false;
  fadeIn = false;
  @Input() data: TCardData = {
    projectName: 'Project name',
    description: 'Description',
    forks: 0,
    watchers: 0,
    updatedAt: 0,
    license: 'License',
    html_url: 'url',
  };

  onMouseOver() {
    this.show = true;
    setTimeout(() => {
      this.fadeIn = true;
    }, 1);
  }

  onMouseLeave() {
    this.fadeIn = false;
    setTimeout(() => {
      this.show = false;
    }, 300);
  }
}
