import {DM_Serif_Display, DM_Serif_Text, Inter} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

export const inter = Inter({ subsets: ["latin"] });
export const serifFont:NextFont = DM_Serif_Text({
    weight: "400",
    subsets: ["latin"],
    style: ['normal', "italic"]
});