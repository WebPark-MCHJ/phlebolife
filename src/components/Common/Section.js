const Section = ({ children, className }) => (
  <section className={className}>
    <div className="content">{children}</div>
  </section>
);

export default Section;
