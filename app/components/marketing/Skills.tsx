import Image from "next/image";

const skills = [
    {
        name: "Javascript",
        image: "/img/javascript-logo.png",
    },
    {
        name: "Typescript",
        image: "/img/typescript-logo.png",
    },
    {
        name: "React JS",
        image: "/img/react-logo.png",
    },
    {
        name: "Tailwind CSS",
        image: "/img/tailwind-logo.png",
    },
    {
        name: "Git",
        image: "/img/git-logo.png",
    },
    {
        name: "aws",
        image: "/img/aws-logo.png",
    },
    {
        name: "Docker",
        image: "/img/docker-logo.png",
    },
];
const Skills = () => {
    return (
        <section id="skills" className="p-5 mt-10">
            <h2 className=" font-serif text-3xl font-medium">
                Quelques Technos
                <hr className="border-border mt-2" />
                <div className="grid grid-cols-3 gap-3 p-2 w-full sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-lg bg-card shadow-md border"
                        >
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                width={150}
                                height={150}
                                className="object-cover"
                            />
                            <p className="text-sm text-center font-bold p-1">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </h2>
        </section>
    );
};

export default Skills;
