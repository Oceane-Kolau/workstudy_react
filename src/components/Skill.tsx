import React from "react";

export type SkillProps = {
  title: string;
  votes: number;
};

const Skill = ({ title, votes }: SkillProps): JSX.Element => {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
};

export default Skill;
