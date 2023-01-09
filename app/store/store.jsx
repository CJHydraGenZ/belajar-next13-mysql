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

export const useDataWilayah = create((set, get) => ({
  error: {},
  isLoading: false,
  kacamatan: {},
  getKecamatanData: async (params) => {
    try {
      const data_kecamatan = await fetcher(
        `http://www.emsifa.com/api-wilayah-indonesia/api/districts/5101.json`,
      );
      set(() => ({ kecamatan: data_kecamatan }));
    } catch (error) {
      set(() => ({ loading: false, error: error }));
    }
  },
  desa: {},
  getDesaData: async (params = 5101040) => {
    try {
      const data_desa = await fetcher(
        `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${params}.json`,
      );
      set(() => ({ desa: data_desa }));
    } catch (error) {
      set(() => ({ loading: false, error: error }));
    }
  },
}));
// export default useRegisterStore;
