import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${source_code_pro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
