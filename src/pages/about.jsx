import React from "react";
import FramerItem from "../components/FramerItem";
import { Link } from "@reach/router";

export default (props) => {
  return (
    <FramerItem isContainer>
      <FramerItem>
        <Link to="/">Go Home</Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          distinctio tenetur autem? Repudiandae necessitatibus fuga quia
          assumenda eligendi optio magnam, rerum id veritatis eaque! Velit
          dignissimos cumque qui beatae hic!
        </p>
      </FramerItem>
      <FramerItem>
        <Link to="/">Go Home too !</Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          distinctio tenetur autem? Repudiandae necessitatibus fuga quia
          assumenda eligendi optio magnam, rerum id veritatis eaque! Velit
          dignissimos cumque qui beatae hic!
        </p>
      </FramerItem>
    </FramerItem>
  );
};
