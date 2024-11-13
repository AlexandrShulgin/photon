export interface ILoginData {
  login: string;
  password: string;
  cb: (token: string) => void;
}

export interface IAiConnect {
  message: string;
  url?: string;
}
