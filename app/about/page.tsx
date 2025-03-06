import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { getContent } from "@/lib/content";
import { Content } from "@/types";
import { getContact } from "@/lib/contact";
import { Contact } from "@/types";

export default function About() {
  const content: Content = getContent();
  const contact: Contact = getContact();

  return (
    <main className="min-h-screen flex flex-col justify-center lg:w-3/5 lg:mx-auto px-4 mt-20">
      {/* ABOUT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-light2 dark:bg-dark2 px-4 py-6 rounded-lg shadow-inner shadow-black/10">
        <div>
          <h1 className="text-xl font-semibold">About.</h1>
        </div>
        <div>
          <p className="opacity-80">{content[1].about}</p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
        <div>
          <h1 className="text-xl font-semibold">Education.</h1>
        </div>
        <div>
          {content[2].education.map((data) => (
            <>
              <p className="opacity-80">{data.school}</p>
              <p className="opacity-60">{data.program}</p>
            </>
          ))}
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="grid lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-1 md:grid-rows-4 gap-4 px-4 py-6  bg-light2 dark:bg-dark2 rounded-lg shadow-inner shadow-black/10">
        <div className="row-span-3">
          <h1 className="text-xl font-semibold">Work.</h1>
        </div>

        <div className="row-span-3 ">
          {content[3].workHistory.map((data) => (
            <>
              <div className="my-2">
                <h2 className="text-lg">{data.company}</h2>{" "}
                <p className="opacity-90">{data.jobTitle}</p>
                <p className="text-xs opacity-60">{data.duration}</p>
                <p className="mt-1 text-sm opacity-80">{data.jobDescription}</p>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
        <div>
          <h1 className="text-xl font-semibold">Contact.</h1>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:newtonkamau14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MdOutlineEmail size={28} />
            Email me!
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FiGithub size={28} />
            Github
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <AiOutlineLinkedin size={28} />
            Linkedin
          </a>
          <a
            href={content[0].personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <IoDocumentTextOutline size={28} />
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}
