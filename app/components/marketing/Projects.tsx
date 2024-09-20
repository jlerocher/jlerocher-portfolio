import { allProjects } from "@/.contentlayer/generated";
import Image from "next/image";
import { Badge } from "../shadcn-ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../shadcn-ui/card";

const Projects = () => {
    return (
        <section id="projects" className="rounded-lg py-5 mt-8">
            <h2 className="font-serif text-3xl font-medium text-center w-full">
                Mes réalisations
            </h2>
            <hr className="border-border my-2" />
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:justify-center md:grid-cols-3">
                {allProjects.map((project) => (
                    <Card key={project.title} className="pt-0 overflow-hidden">
                        <CardHeader className="p-0 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full"
                            />
                            <CardTitle className="text-lg mx-2">
                                {project.title}
                            </CardTitle>
                            <CardDescription className="mx-2 border-l-4 border-border p-4 bg-accent/30 shadow-inner text-accent-foreground rounded">
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} className="w-fit">
                                    {tech}
                                </Badge>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
