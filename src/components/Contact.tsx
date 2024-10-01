export type Contact = {
    id: number
  contactLink: string;
  contactImg: string;
  contactImgAltText: string;
};

function Contact({ contact }: { contact: Contact }) {
  return (
    <a href={contact.contactLink}>
      <img src={contact.contactImg} alt={contact.contactImgAltText} />
    </a>
  );
}

export default Contact;
