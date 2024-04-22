import { ClerkProvider } from "@clerk/nextjs";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Smarthopper - Foodie Cart",
  description:
    "Smarthopper is a eMenu browser based application for restraunts, cafes, hotels, ect. This application is mainly built to reduce carbon footprint.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
