import React from 'react';
import Proptypes from "prop-types";

const Skill = ({ title, votes }) => {
    return (
        <li>
            {title}
            <span className="votes">{votes}</span>
        </li>
    );
}

Skill.propTypes = {
    title: Proptypes.string.isRequired,
    votes: Proptypes.number.isRequired,
};

export default Skill;