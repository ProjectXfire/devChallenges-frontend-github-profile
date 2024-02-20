import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import type { IProfile, IRepo } from '@app/core/interfaces';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  private profile = signal<IProfile | null>(null);

  set setProfile(profile: IProfile) {
    this.profile.set(profile);
  }

  get getProfile(): IProfile | null {
    return this.profile();
  }

  findGithubUserProfile(username: string): Observable<IProfile> {
    return this.http
      .get<IProfile>(`https://api.github.com/users/${username}`)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          throwError(() => error.message)
        ),
        map((data) => {
          const {
            id,
            name,
            avatar_url,
            bio,
            followers,
            following,
            html_url,
            location,
            repos_url,
          } = data;
          const username: IProfile = {
            id,
            name,
            bio,
            avatar_url,
            followers,
            following,
            html_url,
            location,
            repos_url,
            repositories: [],
          };
          return username;
        }),
        switchMap((data) => {
          return this.getGithubRepositories(data.repos_url).pipe(
            map((repos) => {
              data.repositories = repos;
              return data;
            })
          );
        })
      );
  }

  private getGithubRepositories(url: string): Observable<IRepo[]> {
    return this.http.get<IRepo[]>(url).pipe(
      catchError((error: HttpErrorResponse) => throwError(() => error.message)),
      map((data) => {
        const repositories: IRepo[] = data.slice(0, 4).map((rep) => ({
          id: rep.id,
          description: rep.description,
          forks: rep.forks,
          html_url: rep.html_url,
          license: rep.license,
          name: rep.name,
          updated_at: rep.updated_at,
          watchers: rep.watchers,
        }));
        return repositories;
      })
    );
  }
}
