"use client";

import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import React from "react";
import Logo from "./Logo";
import { Button } from "@nextui-org/button";
import ThemeToggler from "./ThemeToggler";

export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export const mymenuitems: MenuItem[] = [
  {
    id: "about us",
    label: "About Us",
    path: "/about",
  },
  {
    id: "contact us",
    label: "Contact Us",
    path: "/contact",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        {mymenuitems.map((item: MenuItem, index: number) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              color="foreground"
              size="lg"
              className="font-semibold"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <ThemeToggler />

      </NavbarContent>

      <NavbarMenu>
        <div className="flex !items-center text-left justify-center gap-10 h-fit text-3xl flex-col">
          {mymenuitems.map((item: MenuItem, index: number) => (
            <NavbarMenuItem key={index}>
              <Link
                href={item.path}
                color="foreground"
                size="lg"
                className="font-semibold"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
                  <ThemeToggler />

        </div>
      </NavbarMenu>
    </Navbar>
  );
}
