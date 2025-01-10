"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMedia } from "react-use";
import { useRouter } from "next/router";
import { Button } from "./button";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width:1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white boredr-none focus-visible:ring-offset-0 focus-visible:ring-transparent 
            outline-none text-white focus:bg-white/30 transition
            "
          >
            <Menu />
          </Button>
        </SheetTrigger>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};