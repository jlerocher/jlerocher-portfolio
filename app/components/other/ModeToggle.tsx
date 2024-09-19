"use client";

import { useTheme } from "next-themes";

import { Button } from "@/app/components/shadcn-ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/app/components/shadcn-ui/dropdown-menu";
import { MoonIcon } from "@radix-ui/react-icons";
import { Monitor, SunIcon } from "lucide-react";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <div className="hidden sm:block">
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent align="end" className="text-card-foreground">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2"
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-card-foreground" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2"
                >
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-card-foreground" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center gap-2"
                >
                    <Monitor className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-card-foreground" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
