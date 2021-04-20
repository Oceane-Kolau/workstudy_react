import React from "react";
import blank_profile from "../blank_profile.jpeg";
import Skill, { SkillProps } from "./Skill";

export type WilderProps = {
  _id?: string;
  city: string;
  name: string;
  skills: SkillProps[];
};

const Wilder = ({ name, skills, city }: WilderProps): JSX.Element => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h2>{name}</h2>
      <h3>{city}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
