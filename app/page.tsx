// import Image from "next/image";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <main>
        <section className="min-h-screen flex flex-col justify-center gap-6">
          <h1 className="text-5xl leading-relaxed">
            <span className="border-b-8 border-lightblue">
              Fullstack Developer
            </span>{" "}
            currently based in Nairobi,Kenya
          </h1>
          <p className="text-2xl leading-normal">
            Hello! My name is Newton and I&apos;m an architect turned software
            engineer. I love building fast and light-weight full-stack
            applications.{" "}
            <span className="border-b-4 border-lightorange">JavaScript</span> +{" "}
            <span className="border-b-4 border-lightorange">TypeScript</span> is
            my &quot;native&quot; programming language. I primarily use it in
            the frontend with{" "}
            <span className="border-b-4 border-lightorange">React</span> and in
            the backend with{" "}
            <span className="border-b-4 border-lightorange">Node</span> +{" "}
            <span className="border-b-4 border-lightorange">Express.</span>
          </p>

          <p className="flex items-center gap-3 p-4 rounded-md dark:bg-dark2 w-fit text-lg">
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-xl shadow-green-300"></span>
            Looking for job opportunites
          </p>

          <div className="flex gap-4">
            <a href="#" target="_blank">
              <AiOutlineLinkedin size={24} />
            </a>
            <a href="#" target="_blank">
              <FiGithub size={24} />
            </a>
            <a href="#" target="_blank">
              <IoDocumentTextOutline size={24}/>
            </a>
          </div>

          <Link
            href="/about"
            className="flex items-center gap-2 bg-lightorange w-fit font-semibold px-4 py-3 rounded-md text-lg text-[#202020]"
          >
            Learn more about me! <FaArrowRight size={15} />
          </Link>
        </section>
        <section className="min-h-screen bg-dark2">
          <div className="h-20 w-20 bg-[#ffb703] text-black flex justify-center items-center">
            box 2
          </div>
        </section>
        <section>
          <div className="h-20 w-20 bg-lightorange text-black flex justify-center items-center mt-4">
            box 3
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
