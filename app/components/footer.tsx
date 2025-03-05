import { getContact } from "@/lib/contact";
import { Contact } from "@/types";

export default function Footer() {
  const contact: Contact = getContact();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-light2 dark:bg-dark2 py-4 h-48">
      <div className="lg:w-3/5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between text-lg h-full px-4">
        <div className="mb-4 lg:mb-0">
          <p>&copy; {year} Newton Kamau</p>
        </div>
        <div className="flex gap-4">
          <a
            href={contact.github}
            target="_blank"
            className="text-black dark:text-white"
          >
            GitHub
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            className="text-black dark:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
