import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import localFont from "next/font/local";
import "./globals.css";
import { ConfigProvider } from "antd";
import theme from "@/src/theme/themeConfig";
import "swiper/css";
import "swiper/css/pagination";

const dana = localFont({
  src: "../public/.././public/assets/Gilroy Font/Gilroy-Medium.ttf",
});

export const metadata: Metadata = {
  title: "Omid Teymouri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <body className={dana.className}>{children}</body>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
