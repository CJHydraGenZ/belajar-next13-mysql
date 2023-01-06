import axios from "axios";
import create from "zustand";

export const useRegisterStore = create((set, get) => ({
  bears: 0,
  register: {},
  loading: false,
  error: {},
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  registerData: async (params) => {
    const { email, password, role } = params;
    // return console.log("ini log zustand", params);
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email,
        password,
        role,
      });
      set(() => ({ register: response }));
      // console.log({data});
    } catch (error) {
      set(() => ({ loading: false, error: error }));
      // throw new Error(error);
    }
  },
}));
export const useUserStore = create((set, get) => ({
  userData: {},
  isLoading: false,
  error: {},
  getUserData: async () => {
    try {
      const response = await fetcher("/api/user");
      set(() => ({ userData: response }));
    } catch (error) {
      set(() => ({ loading: false, error: error }));
    }
  },
}));
// export default useRegisterStore;
