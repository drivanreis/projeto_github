import { GithubUser } from './github';

export type GlobalState = {
  loading: boolean,
  error?: string | null,
  userData: GithubUser | null,
  getData: (user: string) => void
};
