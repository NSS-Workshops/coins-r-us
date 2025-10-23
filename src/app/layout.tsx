"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    transition: background 0.3s, color 0.3s;
  }
  a {
    color: blue;
  }
`;

const NavBar = () => (
  <nav
    style={{
      width: "100%",
      padding: "24px 0 16px 0",
      display: "flex",
      justifyContent: "center",
      gap: "36px",
      fontSize: "1.25rem",
      fontWeight: 700,
      background: "transparent",
      letterSpacing: "0.05em",
    }}
  >
    <a href="/">Home</a>
    <a href="/add">Add a coin</a>
    <a href="/inventory">Inventory</a>
  </nav>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeMode, setThemeMode] = useState("light");
  const [paletteIdx, setPaletteIdx] = useState(0);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const pal = typeof window !== "undefined" ? localStorage.getItem("paletteIdx") : null;
    if (pal) setPaletteIdx(parseInt(pal));
    if (stored === "light" || stored === "dark") {
      setThemeMode(stored);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeMode("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", themeMode);
      localStorage.setItem("paletteIdx", paletteIdx.toString());
    }
  }, [themeMode, paletteIdx]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <GlobalStyle />
          <NavBar  />
          {children}
      </body>
    </html>
  );
}
