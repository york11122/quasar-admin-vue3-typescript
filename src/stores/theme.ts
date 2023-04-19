import { defineStore } from "pinia";
import { colors, setCssVar, Dark } from "quasar"

const { getPaletteColor, lighten, luminosity } = colors
const primaryColor = getPaletteColor("primary")
const darkColor = getPaletteColor("dark")
console.log(darkColor)

interface ThemeColor {
    primary: string;
}


export const useThemeStore = defineStore("theme", {
    state: (): ThemeColor => ({
        primary: primaryColor,
    }),

    getters: {
        primaryColor(state): string {
            if (Dark.isActive) {
                return darkColor
            }
            return state.primary
        },
        activeBgColor(state): string {
            if (Dark.isActive) {
                return "#121212"
            }
            return luminosity(state.primary) > 0.4 ? lighten(state.primary, -40) : lighten(state.primary, 90)
        },
        activeTextColor(state): string {
            if (Dark.isActive) {
                return "#ffffff"
            }
            return luminosity(state.primary) > 0.4 ? "#ffffff" : state.primary
        }
    },

    actions: {
        setThemeColor(color: string) {
            this.primary = color;
            setCssVar('primary', color)
        }
    },
});
