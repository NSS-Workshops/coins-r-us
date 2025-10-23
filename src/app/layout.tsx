"use client";
import React, { useState, useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import { Button, Flex } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const NavBar = () => (
  <nav>
    <Flex gap="3">
      <Button asChild variant="soft" size="3">
        <a href="/">Home</a>
      </Button>
      <Button asChild variant="soft" size="3">
        <a href="/add">Add a coin</a>
      </Button>
      <Button asChild variant="soft" size="3">
        <a href="/inventory">Inventory</a>
      </Button>
    </Flex>
  </nav>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="purple">
          <NavBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
