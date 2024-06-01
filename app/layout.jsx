import { Inter } from "next/font/google";
import "./globals.css";
import "7.css/dist/7.css";
import { Tooltip } from "@/components/component/ReactTooltip";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catetin",
  description: "Catetin by unyi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Tooltip
          id="my-tooltip"
          content={`I'm on the `}
        // place={PLACES[place]}
        />
      </body>
    </html>
  );
}
