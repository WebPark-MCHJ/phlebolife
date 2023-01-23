const Advantage = ({ children, name, ...props }) => {
  return (
    <div className="advantage" {...props}>
      {children}
      <h3>{name}</h3>
    </div>
  );
};

export default Advantage;
