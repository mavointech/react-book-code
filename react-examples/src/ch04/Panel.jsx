// "children" is whatever you put BETWEEN the opening and closing tags.
export default function Panel({ title, children }) {
  return (
    <section className="card">
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}
