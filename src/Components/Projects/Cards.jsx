import style from "../../Styles/Projects.module.css";
import githubRepo from "../../Images/githubRepo.png";
import web from "../../Images/web.png";
import { projects } from "../../Projects";

function GroupExample() {

  return (
    <section id="Proyectos" className={style.container_cards}>
      {projects.map((project) => (
        <div className={style.card_one} key={project.name}>
          <a href={project.deploy} target={"blank"}>
            <img
              src={project.img}
              className={style.projects}
              alt={project.name}
            />
          </a>
          <h3>{project.name}</h3>
          <p>{project.overview}</p>
          <div className={style.social_media}>
            <a href={project.link} target={"blank"}>
              <img src={githubRepo} alt="github" />
            </a>
            <a href={project.deploy} target={"blank"}>
              <img src={web} style={{ width: "25px" }} alt={project.name} />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GroupExample;
