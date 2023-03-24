import "./Alert.css";

function Alert({ variant, outlined, elevated, children }) {
  return (
    <p
      className={`alert ${variant} ${elevated ? "is-elevated" : ""} ${
        outlined ? "is-outlined" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default Alert;
