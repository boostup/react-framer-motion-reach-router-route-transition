import React from "react";
import FramerItem from "../components/FramerItem";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <FramerItem isContainer>
      <FramerItem>
        <Link to="/eaasdasd/">Wrong Link</Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          distinctio tenetur autem? Repudiandae necessitatibus fuga quia
          assumenda eligendi optio magnam, rerum id veritatis eaque! Velit
          dignissimos cumque qui beatae hic!
        </p>
      </FramerItem>
      <FramerItem>
        <Link to="/easdas/asdasda">Wrong Link too !</Link>
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
