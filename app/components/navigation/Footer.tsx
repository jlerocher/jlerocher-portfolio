import { navItems } from "@/app/components/navigation/Header";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
    {
        name: "Mon compte Github",
        href: "https://github.com/jlerocher",
        icon: (
            <Github className="size-5 text-base font-bold text-black fill-slate-300" />
        ),
    },
    {
        name: "Mon compte LinkedIn",
        href: "https://www.linkedin.com/in/jlerocher/",
        icon: (
            <Linkedin className="size-5 text-base font-bold text-blue-500 fill-blue-500" />
        ),
    },
    {
        name: "Mon compte Twitter",
        href: "https://x.com/jlerocher2023",
        icon: (
            <Twitter className="size-5 text-base font-bold text-blue-500 fill-blue-500" />
        ),
    },
];

const Footer = () => {
    return (
        <footer className="bg-card py-4 px-4 border-t border-border">
            <div className=" flex flex-row items-center justify-between">
                <h2 className="text-center font-bold block text-2xl font-serif min-w-40">
                    Jean Le Rocher
                </h2>

                <nav className="flex items-center gap-3 sm:gap-8 justify-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium flex gap-1 sm:gap-2 items-center"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <p className="text-center text-sm py-5 gap-2 sm:gap-8 w-full flex flex-row items-center justify-center">
                {socials.map((social) => (
                    <Link
                        key={social.name}
                        href={social.href}
                        title={social.name}
                        className="text-base font-medium flex gap-1 items-center border border-border rounded-md p-2 shadow-md"
                    >
                        {social.icon}
                    </Link>
                ))}
            </p>

            <p className="text-center text-sm py-5">
                Licence MIT | Copyright © {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
