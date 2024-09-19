/* eslint-disable react/no-unescaped-entities */
import { CodeIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shadcn-ui/button";

const Hero = () => {
    return (
        <div className="bg-card shadow text-card-foreground flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-3 sm:px-6 flex relative py-10">
                <div className="sm:w-2/3 lg:w-3/5 flex flex-col gap-5 relative z-20">
                    <span className="w-20 h-2 bg-primary  mb-8"></span>
                    <h1 className="font-serif uppercase text-5xl sm:text-6xl font-black flex flex-col leading-none gap-5">
                        Jean Le Rocher
                        <span className="text-3xl sm:text-5xl">
                            Développeur Web Fullstack & DevOps
                        </span>
                    </h1>
                    <p className="text-sm w-11/12 sm:text-base">
                        Propulsez votre présence en ligne avec des solutions web
                        fullstack innovantes. Je m'engage à fournir des
                        solutions web 100% adaptées à vos besoins, en respectant
                        les délais et les bonnes pratiques de développement web.
                    </p>
                    <div className="flex items-center w-full gap-4 mt-8">
                        <Button variant="default" size="default">
                            <Link
                                href="#contact"
                                className="uppercase font-bold flex items-center gap-2"
                            >
                                <EnvelopeClosedIcon className="w-5 h-5" />
                                Me contacter
                            </Link>
                        </Button>
                        <Button variant="outline" size="default">
                            <Link
                                href="#projects"
                                className="flex items-center gap-2"
                            >
                                <CodeIcon className="w-5 h-5" />
                                Mes réalistions
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    {/*<Image
                        src="/img/javascript-logo.png"
                        alt="javascript"
                        width={30}
                        height={30}
                        className="rounded-full absolute top-[24px] left-[230px]"
                    />*/}
                    <Image
                        alt="Jean Le Rocher"
                        src="/img/avatar.png"
                        width={800}
                        height={800}
                        className="max-w-xs md:max-w-sm m-auto shadow-lg  object-cover rounded-tl-full rounded-br-full bg-muted"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
