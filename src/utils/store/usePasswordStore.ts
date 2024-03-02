import { PasswordStore } from "@/types/password";
import { create } from "zustand";

const usePasswordStore = create<PasswordStore>((set) => ({
  passwords: [],
  addPassword: (password, name) =>
    set((state) => ({
      passwords: [
        ...state.passwords,
        {
          id: state.passwords.length + 1,
          password: password,
          name: name,
          focused: false,
        },
      ],
    })),
  removePassword: (passwordId) =>
    set((state) => ({
      passwords: state.passwords.filter(
        (password) => password.id !== passwordId
      ),
    })),
  updatePassword: (passwordId, newPassword) =>
    set((state) => ({
      passwords: state.passwords.map((password) =>
        password.id === passwordId
          ? { ...password, password: newPassword }
          : password
      ),
    })),
  focusPassword: (passwordId) => {
    set((state) => ({
      passwords: state.passwords.map((password) =>
        password.id === passwordId
          ? { ...password, focused: !password.focused }
          : password
      ),
    }));
  },
}));

export default usePasswordStore;
