export default function Footer() {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <footer className="footer">
      <p>
        Newton &#169; <span>{year}</span>
      </p>
    </footer>
  );
}
