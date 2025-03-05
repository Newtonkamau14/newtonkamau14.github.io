import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Badge from "./badge";
import { Project } from "@/types";

type CardProps = {
  project: Project;
};

export default function Card({ project }: CardProps) {
  return (
    <div className="bg-light1 dark:bg-dark1 dark:text-[#fefefe] w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg dark:shadow">
      <div className="flex flex-col justify-around gap-5 p-4">
        <Badge
          badgeText={project.type}
          className="p-1 bg-[#DBF3F3] dark:bg-[#1D434D] w-fit rounded-lg text-sm text-[#4BC0C8]"
        />
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p>{project.description}</p>

        <h2 className="text-xl font-bold">Tech Stack:</h2>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              badgeText={tech}
              className="p-1 bg-[#FFEEDE] dark:bg-[#413E38] w-fit rounded-lg text-sm text-[#FEAC5E]"
            />
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.githubUrl}>
            <FiGithub size={24} />
          </a>
          <a href={project.demoUrl}>
            <IoIosLink size={24} />
          </a>
        </div>
      </div>
      <div className="bg-light2 dark:bg-dark2 flex justify-center items-center rounded-lg m-5">
        <Image
          src={project.image ?? "https://placehold.co/450x300"}
          alt="project image"
          width={450}
          height={300}
          className="object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
}
