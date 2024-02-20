export interface IRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  forks: number;
  watchers: number;
  license: ILicense | null;
  updated_at: string;
}

interface ILicense {
  key: string;
  name: string;
  spdx_id: string;
}
