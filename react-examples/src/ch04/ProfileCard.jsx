// Props are the inputs of a component. We destructure them in the
// parameter list and give some of them default values.
export default function ProfileCard({
  name,
  jobTitle,
  company = 'Freelance',
  years = 0,
}) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>
        {jobTitle} at {company}
      </p>
      {years > 5 && <span className="badge">Senior</span>}
    </article>
  );
}
