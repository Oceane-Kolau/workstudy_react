import React from 'react';
import blank_profile from './blank_profile.jpeg';
import Skills from "./Skills";

const Wilder = (props) => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{props.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
            </p>
      <h4>Wild Skills</h4>
      <Skills skillType="Symfony"
            vote= "4"/>
    </article>
  )
    ;
}

export default Wilder;