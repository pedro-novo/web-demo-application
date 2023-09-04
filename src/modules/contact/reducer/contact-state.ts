export interface ContactState {
  name: string;
  email: string;
  description: string;
  location: string;
  date: string;
}

export const initialContactState: ContactState = {
  name: '',
  email: '',
  description: '',
  location: 'Spain',
  date: '04-09-2023',
};
