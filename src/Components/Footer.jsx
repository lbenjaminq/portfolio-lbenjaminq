import React from "react";
import { Container } from "react-bootstrap";
import style from "../Styles/Footer.module.css";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";

const Footer = () => {
  return (
    <Container className={style.container_footer}>
      <h5>
        Hecho por <span>Leandro Benjamin Quiroga</span>
      </h5>
      <div className={style.container_img}>
        <a href="https://github.com/lbenjaminq/" target="blank">
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/leandro-quiroga-4613a1236/"
          target="blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
