import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Card from "@/app/components/card";
import { getProjects } from "@/lib/projects";
import {  Content, Project } from "@/types/index";
import { getContent } from "@/lib/content";

export default function Home() {
  const content: Content = getContent();
  const projects = getProjects();

  return (
    <div>
      <main>
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center gap-6 px-4 lg:w-3/5 lg:mx-auto">
          <h1 className="text-3xl md:text-5xl leading-relaxed relative">
            <span className="border-b-0 border-lightblue relative">
              Fullstack Developer
              <div className="absolute left-0 bottom-2 w-full h-2 bg-lightblue -z-10"></div>
            </span>{" "}
            currently based in Nairobi, Kenya
          </h1>
          <p className="text-lg md:text-2xl leading-normal">
            Hello! My name is Newton and I love building fast and light-weight
            full-stack applications.{" "}
            <span className="border-b-4 border-lightorange">JavaScript</span> +{" "}
            <span className="border-b-4 border-lightorange">TypeScript</span> is
            my &quot;native&quot; programming language. I primarily use it in
            the frontend with{" "}
            <span className="border-b-4 border-lightorange">React</span> and in
            the backend with{" "}
            <span className="border-b-4 border-lightorange">Node</span> +{" "}
            <span className="border-b-4 border-lightorange">Express.</span>
          </p>

          <p className="flex items-center gap-3 p-4 rounded-md bg-light2 dark:bg-dark2 w-fit text-lg shadow-inner shadow-black/10">
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.5)]"></span>{" "}
            Looking for job opportunities
          </p>

          <div className="flex gap-4">
            <a href={content[0].personalDetails.linkedInUrl} target="_blank">
              <AiOutlineLinkedin size={24} />
            </a>
            <a href={content[0].personalDetails.githubUrl} target="_blank">
              <FiGithub size={24} />
            </a>
            <a href={content[0].personalDetails.resumeUrl} target="_blank">
              <IoDocumentTextOutline size={24} />
            </a>
          </div>

          <Link
            href="/about"
            className="flex items-center gap-2 bg-lightorange w-fit font-semibold px-4 py-3 rounded-md text-lg text-[#202020]"
          >
            Learn more about me! <FaArrowRight size={15} />
          </Link>
        </section>

        {/* PROJECTS */}
        <section className="min-h-screen bg-light2 dark:bg-dark2 flex flex-col items-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold my-10">
            What I&apos;ve been{" "}
            <span className="relative">
              working
              <div className="absolute left-0 bottom-1 w-full h-2 bg-lightblue -z-4"></div>
            </span>{" "}
            on
          </h1>

          <div className="flex flex-col gap-4 lg:w-3/5 lg:mx-auto pb-8">
            {projects.projects.map((project: Project) => (
              <Card key={project.name} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
