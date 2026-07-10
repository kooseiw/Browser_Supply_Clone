import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const Gambetta = localFont({
    src: [
        {
            path: "./gambetta/Gambetta-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./gambetta/Gambetta-Italic.otf",
            weight: "400",
            style: "italic",
        },
    ],
})

export const InterFont = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
})