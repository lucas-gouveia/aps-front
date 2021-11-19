import React from "react";
import { Container } from "./styles";

const Tooltip = ({ message, children, style }) => {
  return (
    <Container>
      <div className="icon">{children}</div>
      <span className="tooltip" style={{ ...style }}>
        <div className="triangle-with-shadow" />
        {message}
      </span>
    </Container>
  );
};

export { Tooltip };