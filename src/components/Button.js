const Button = ({ children, status, handleClick }) => {
  const result = status === "resolve" ? "resolve-style" : "reject-style";
  return <button onClick={handleClick} className={result}>{children}</button>;
};

export default Button;
