import React from "react";
import { Badge } from "../styles/elements";

export type SkillProps = {
  title: string;
  votes: number;
};

const Skill = ({ title, votes }: SkillProps): JSX.Element => {
  return (
    <li>
      {title}
      <Badge votes={votes}>{votes}</Badge>
    </li>
  );
};

export default Skill;
