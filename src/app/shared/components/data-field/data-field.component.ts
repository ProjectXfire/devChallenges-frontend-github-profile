import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-field',
  standalone: true,
  imports: [],
  templateUrl: './data-field.component.html',
  styleUrl: './data-field.component.css',
})
export class DataFieldComponent {
  @Input() field: string = '';
  @Input() value?: string = '';
}
