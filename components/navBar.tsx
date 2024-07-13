'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/components/themeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Logo } from '@/components/icons';

export function NavBar() {
  return (
    <NavigationMenu className="mx-8 md:mx-16 my-8">
      <NavigationMenuList>
        <NavigationMenuItem className="sm:hidden">
          <NavigationMenuTrigger><HamburgerMenuIcon/></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-4 flex flex-col">
              <ListItem href="/" className="flex flex-row">
                <Logo size={24} className="mr-2"/>
                <div>Argo Sözlüğü</div>
              </ListItem>
              <ListItem href="/hakkimizda">
                Hakkımızda
              </ListItem>
              <ListItem href="/ifadeler">
                İfadeler Listesi
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:flex">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg")}>
              <Logo size={32} className="mr-2"/>
              Argo Sözlüğü
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:flex">
          <Link href="/hakkimizda" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md")}>
              Hakkımızda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:flex">
          <Link href="/ifadeler" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md")}>
              İfadeler Listesi
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ThemeToggle/>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = (({ className, children, href, ...props }: { className?: string, children: any, href: string }, ref: { ref: any }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex flex-row items-center">{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
})