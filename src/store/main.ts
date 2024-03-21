import { create } from "zustand";
import { createSelectors } from "@/lib/createSelectors";

interface MainState {
  theme: "light" | "dark";
}

export const useMainStore = create<MainState>()((set) => ({
  theme: "dark",
}));

export const fromStore = createSelectors(useMainStore);
