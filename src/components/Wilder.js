import React from 'react';
import blank_profile from '../blank_profile.jpeg';
import Skill from "./Skill";
import Proptypes from "prop-types";

const Wilder = ({name, skills, city}) => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h2>{name}</h2>
      <h3>{city}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
            </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
      {skills.map((el) => < Skill {...el}/>)}
      </ul>
    </article>
  );
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  skills: Proptypes.array,
}
export default Wilder;