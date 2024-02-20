import {
  Component,
  type ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { type IProfile } from '@app/core/interfaces';
import { GithubService } from '@app/core/services';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private githubService: GithubService) {}

  @Input() placeholder: string = 'Add a placeholder';
  @ViewChild('inputSearch') inputRef: ElementRef<HTMLInputElement> | null =
    null;

  timer: ReturnType<typeof setTimeout> | null = null;
  showOptions: boolean = false;
  valueFound: IProfile | null = null;

  onSelectValue() {
    this.showOptions = false;
    if (this.valueFound) this.githubService.setProfile = this.valueFound;
  }

  clearInput() {
    if (!this.inputRef) return;
    this.showOptions = false;
    this.inputRef.nativeElement.value = '';
  }

  handleInputValue(e: KeyboardEvent) {
    const { value } = e.target as HTMLInputElement;
    if (this.timer) clearTimeout(this.timer);
    if (value.length === 0) {
      this.showOptions = false;
      this.valueFound = null;
      return;
    }
    this.timer = setTimeout(() => {
      this.githubService.findGithubUserProfile(value).subscribe({
        error: () => {
          this.valueFound = null;
          this.showOptions = true;
        },
        next: (data) => {
          this.valueFound = data;
        },
        complete: () => {
          this.showOptions = true;
        },
      });
    }, 500);
  }
}
