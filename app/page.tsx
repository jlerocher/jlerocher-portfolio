import Contacts from "./components/marketing/Contacts";
import Hero from "./components/marketing/Hero";
import Projects from "./components/marketing/Projects";
import Skills from "./components/marketing/Skills";

export default function Home() {
    return (
        <div className="">
            <Hero />

            <Skills />

            <Projects />

            <Contacts />
        </div>
    );
}
