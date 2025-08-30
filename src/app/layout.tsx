import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gluoin Code | My Personal Portofolio",
  description: "Dark theme personal portfolio",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-theme text-theme">
        <div className="max-w-7xl mx-auto my-auto">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
