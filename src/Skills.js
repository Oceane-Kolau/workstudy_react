const Skills = (props) => {
    return (
        <ul className="skills">
            <li>
                {props.skillType}
                <span className="votes">{props.vote}</span>
            </li>
        </ul>
    );
}
export default Skills;