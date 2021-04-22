import React from "react";
import blank_profile from "../blank_profile.jpeg";
import Skill, { SkillProps } from "./Skill";
import { Card, List } from "../styles/elements";

export type WilderProps = {
  _id?: string;
  city: string;
  name: string;
  skills: SkillProps[];
};

const Wilder = ({ name, skills, city }: WilderProps): JSX.Element => {
  return (
    <Card newCard>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </List>
    </Card>
  );
};

export default Wilder;
