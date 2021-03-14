import { User } from './user';
export interface LocalStorageChanges {
  type ?: string;
  key ?: string;
  value ?: User;
}
