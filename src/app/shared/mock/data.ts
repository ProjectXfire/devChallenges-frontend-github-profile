import { IRepo, type IProfile } from '@app/core/interfaces';

const repos: IRepo[] = [
  {
    id: 170876990,
    name: '.github',
    description: 'Community health files for the @GitHub organization',
    html_url: 'https://github.com/github/.github',
    license: null,
    watchers: 773,
    forks: 2776,
    updated_at: '2024-02-18T21:22:51Z',
  },
  {
    id: 632088451,
    name: 'accessibility-alt-text-bot',
    description: 'Community health files for the @GitHub organization',
    html_url: 'https://github.com/github/accessibility-alt-text-bot',
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
    },
    watchers: 59,
    forks: 12,
    updated_at: '2024-02-12T04:50:51Z',
  },
  {
    id: 95114338,
    name: 'accessibilityjs',
    description: 'Client side accessibility error scanner.',
    html_url: 'https://github.com/github/accessibilityjs',
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
    },
    watchers: 2172,
    forks: 72,
    updated_at: '2024-02-08T19:50:03Z',
  },
  {
    id: 221181294,
    name: 'actions-cheat-sheet',
    description: 'A cheat sheet for GitHub Actions',
    html_url: 'https://github.com/github/actions-cheat-sheet',
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
    },
    watchers: 201,
    forks: 37,
    updated_at: '2024-01-27T13:57:43Z',
  },
];

export const gitHub: IProfile = {
  id: 9919,
  avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
  html_url: 'https://github.com/github',
  repos_url: 'https://api.github.com/users/github/repos',
  bio: 'How people build software.',
  location: 'San Francisco, CA',
  name: 'GitHub',
  followers: 35175,
  following: 0,
  repositories: repos,
};
