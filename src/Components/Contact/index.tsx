import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "../../Styles/SimpleForm.module.css";
import okey from "../../Images/okey.png";
import { Dark } from "../../interface/dark.interface";

export const ContactForm: React.FC<Dark>=({ dark }) =>{
  const [state, handleSubmit] = useForm("mwkzvrqy");

  if (state.succeeded) {
    return (
      <div className={style.send}>
        {" "}
        <img src={okey} alt="okey" />
        {"   "}Gracias, te respondere pronto!
      </div>
    );
  }
  return (
    <div id="Contacto" className={style.container_form}>
      <h1>
        <span className={!dark ? style.front_title : style.front_title_light}>
          ME
          <span style={{ color: "rgb(82, 34, 193)" }}>DI</span>OS DE{" "}
          <span style={{ color: "rgb(82, 34, 193)" }}>CONTACTO</span>
        </span>
        <span className={style.back_title}>CONTACTO</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className={!dark ? style.form : style.form_light}
      >
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="email">Mensaje</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

