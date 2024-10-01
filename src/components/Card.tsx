export type Project = {
  id: number
  img: string;
  imgAltText: string;
  projectLink: string;
  title: string;
  description: string;
};

function Card({ project }: { project: Project }) {
  return (
    <div className="card">
      <img src={project.img} alt={project.imgAltText} />
      <a href={project.projectLink} target="_blank">
        <h3>{project.title}</h3>
      </a>
      <p>{project.description}</p>
    </div>
  );
}

export default Card;
