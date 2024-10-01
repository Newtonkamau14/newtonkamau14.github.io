export type Skill = {
  id: number;
  img: string;
  imgAltText: string;
};

function Skill({ skill }: { skill: Skill }) {
  return <img src={skill.img} alt={skill.imgAltText} />;
}

export default Skill;
