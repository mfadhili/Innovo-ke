import {DM_Serif_Display, Inter} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

export const inter = Inter({ subsets: ["latin"] });
export const serifFont:NextFont = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"]
});