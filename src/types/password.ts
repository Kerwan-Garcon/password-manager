export interface Password {
  id: number;
  password: string;
  name: string;
  focused?: boolean;
}

export interface PasswordStore {
  passwords: Password[];
  addPassword: (password: string, name: string) => void;
  removePassword: (passwordId: number) => void;
  updatePassword: (passwordId: number, newPassword: string) => void;
  focusPassword: (passwordId: number) => void;
}
