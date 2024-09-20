import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/shadcn-ui/dropdown-menu";
import { navItemType } from "@/types";
import {
    CodeIcon,
    EnvelopeClosedIcon,
    HamburgerMenuIcon,
    QuestionMarkCircledIcon,
    ReaderIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "../other/ModeToggle";
import ThemeSwitcher from "../other/ThemeSwitcher";
import { Button } from "../shadcn-ui/button";

export const navItems: navItemType[] = [
    {
        name: "Projets",
        href: "#projects",
        icon: <CodeIcon className="size-5 text-base font-bold" />,
    },
    {
        name: "Blog",
        href: "https://blog-de-rocher.vercel.app/",
        icon: <ReaderIcon className="size-5 text-base font-bold" />,
    },
    {
        name: "A propos",
        href: "/about",
        icon: (
            <QuestionMarkCircledIcon className="size-5 text-base font-bold" />
        ),
    },
];
const Header = () => {
    return (
        <header className="text-card-foreground bg-card py-4 border-b border-border px-2 flex items-center justify-between sm:justify-between">
            <div className="flex items-center gap-6 justify-center">
                <Link href="/" className="flex font-medium items-center">
                    <span className="text-4xl">👋</span>
                    <h2 className="ml-3 text-xl font-bold hidden md:inline md:w-64">
                        Jean Le Rocher | Portfolio
                    </h2>
                </Link>

                <nav className="hidden sm:flex sm:items-center w-full sm:justify-center font-thin text-base">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-base font-medium flex items-center gap-2 hover:rounded-md hover:font-bold hover:shadow-md transition-all duration-300 hover:text-accent-foreground hover:bg-accent py-2 px-4"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-8 justify-center">
                <Button
                    variant="default"
                    className="hidden lg:flex lg:flex-row lg:items-center lg:gap-2 lg:justify-center lg:font-bold"
                >
                    <EnvelopeClosedIcon className="size-5 text-base font-bold" />
                    <Link href="#contacts">Contactez-moi</Link>
                </Button>

                <ModeToggle />
            </div>

            <div className="sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="">
                        <HamburgerMenuIcon className="size-11 shadow-sm font-bold border p-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="sm:hidden min-w-52 mr-2 h-auto">
                        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {navItems.map((item, index) => (
                            <DropdownMenuItem key={index} className="pl-4">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2"
                                >
                                    {item.icon}
                                    <span className="text-base">
                                        {item.name}
                                    </span>
                                </Link>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <ThemeSwitcher />
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;
