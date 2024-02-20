import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '@app/shared/components';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SearchComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
