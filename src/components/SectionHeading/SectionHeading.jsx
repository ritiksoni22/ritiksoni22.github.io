export default function SectionHeading({ children, id }) {
  return (
    <h2 className="section-heading" id={id}>
      {children}
      <span aria-hidden="true">.</span>
    </h2>
  )
}
