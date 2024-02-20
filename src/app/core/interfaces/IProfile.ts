import { IRepo } from './IRepo';

export interface IProfile {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  repos_url: string;
  html_url: string;
  repositories: IRepo[];
}
