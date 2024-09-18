import { CodeIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../shadcn-ui/button";

const navItems = [
    { name: "Blog", href: "/blog", icon: <ReaderIcon className="size-5" /> },
];
const Header = () => {
    return (
        <header className="text-card-foreground bg-card py-4 px-2 flex justify-evenly items-center">
            <Link href="/" className="flex font-medium items-center">
                <CodeIcon className="size-10 font-bold bg-blue-700 text-white rounded-full p-1" />
                <span className="ml-3 text-xl hidden sm:inline">
                    Jean Le Rocher
                </span>
            </Link>

            <nav className="">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center"
                    >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <Button variant="outline" className="ml-auto">
                Contactez moi
            </Button>
        </header>
    );
};

export default Header;
