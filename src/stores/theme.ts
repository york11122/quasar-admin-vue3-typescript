import { defineStore } from "pinia";
import { colors, setCssVar, Dark } from "quasar";

const { getPaletteColor, lighten, luminosity } = colors;
const primaryColor = getPaletteColor("primary");
const darkColor = "#1d1d1d";
const darkPageColor = "#121212";

interface ThemeColor {
  primary: string;
}

export const useThemeStore = defineStore("theme", {
  state: (): ThemeColor => ({
    primary: primaryColor,
  }),

  getters: {
    primaryColor(state): string {
      return state.primary;
    },
    baseBgColor(state): string {
      return Dark.isActive ? darkPageColor : "#f7f9fa";
    },

    activeBgColor(state): string {
      if (Dark.isActive) {
        return lighten(darkColor, 15);
      }
      return luminosity(state.primary) > 0.4
        ? lighten(state.primary, -40)
        : lighten(state.primary, 90);
    },
    activeTextColor(state): string {
      if (Dark.isActive) {
        return "#ffffff";
      }
      return luminosity(state.primary) > 0.4 ? "#ffffff" : state.primary;
    },

    drawerBgColor(state): string {
      return Dark.isActive ? darkPageColor : state.primary;
    },

    drawerTextColor(state): string {
      return luminosity(state.primary) > 0.4 ? "#000000" : "#ffffff";
    },

    headerBgColor(state): string {
      return Dark.isActive ? darkColor : "#ffffff";
    },
    headerTextColor(state): string {
      return Dark.isActive ? "#ffffff" : "#000000";
    }
  },

  actions: {
    setThemeColor(color: string) {
      this.primary = color;
      setCssVar("primary", color);
    },
  },
});
