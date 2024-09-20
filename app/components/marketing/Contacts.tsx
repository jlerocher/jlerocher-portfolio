import Link from "next/link";
import { socials } from "../navigation/Footer";
import { Button } from "../shadcn-ui/button";
import { Card, CardContent } from "../shadcn-ui/card";
import { Label } from "../shadcn-ui/label";
import { Textarea } from "../shadcn-ui/textarea";

const Contacts = () => {
    return (
        <Card className="my-4 shadow-none border border-border rounded max-w-lg mx-auto">
            <h2
                id="contacts"
                className="font-serif text-3xl font-medium py-5 text-center"
            >
                Contactez-moi
            </h2>
            <CardContent className="">
                <form action="" method="" className=" px-2">
                    <div className="flex flex-row items-center gap-2 w-full justify-center my-3">
                        <hr className="w-1/4 border-border" />
                        Via mes réseaux
                        <hr className="w-1/4 border-border" />
                    </div>

                    <fieldset className="flex flex-row gap-2 w-full justify-center sm:hidden">
                        {socials.map((social) => (
                            <Button
                                key={social.name}
                                variant="outline"
                                size="default"
                                className="flex items-center gap-2"
                            >
                                <Link
                                    href={social.href}
                                    className="flex items-center gap-2"
                                >
                                    {social.icon}
                                </Link>
                            </Button>
                        ))}
                    </fieldset>

                    <fieldset className="sm:flex items-center gap-6 justify-center hidden">
                        {socials.map((social) => (
                            <Button
                                key={social.name}
                                variant="outline"
                                size="default"
                                className="flex items-center gap-2 p-6"
                            >
                                <Link
                                    href={social.href}
                                    className="flex items-center gap-2"
                                >
                                    {social.icon}
                                </Link>
                            </Button>
                        ))}
                    </fieldset>

                    <div className="flex flex-row items-center gap-1 w-full justify-center my-3">
                        <hr className="w-2/3 border-border" />
                        ou
                        <hr className="w-2/3 border-border" />
                    </div>

                    <fieldset className="flex flex-col gap-2 w-full justify-center">
                        <Label className="text-base font-medium">
                            Votre nom
                            <input
                                type="text"
                                placeholder="Jean"
                                className="w-full rounded-md border border-border p-2 text-sm bg-transparent placeholder:text-card-foreground/40"
                            />
                        </Label>
                        <Label
                            htmlFor="email"
                            className="text-base font-medium"
                        >
                            Votre email
                            <input
                                type="email"
                                placeholder="jean@lerocher.fr"
                                className="w-full rounded-md border border-border p-2 text-sm bg-transparent placeholder:text-card-foreground/40"
                            />
                        </Label>
                        <label
                            htmlFor="message"
                            className="text-base font-medium"
                        >
                            Votre message
                        </label>
                        <Textarea
                            placeholder="Salut, pouvez vous m'envoyer votre CV ?"
                            className="w-full rounded-md border border-border p-2 text-sm bg-transparent placeholder:text-card-foreground/40"
                        />
                    </fieldset>

                    <Button variant="default" className="w-full my-2">
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Contacts;
