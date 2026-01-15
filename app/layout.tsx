import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "알아서Farm - 개인정보처리방침 및 이용약관",
  description: "알아서Farm의 개인정보처리방침 및 이용약관 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
