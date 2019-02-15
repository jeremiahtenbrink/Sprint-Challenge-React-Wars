import React from "react";
import Film from "./Film";
import './Films.scss';

const Films = ( props ) => {
    return (
        <div className="films">
            <h2>Films</h2>
            {props.films.map((film) => {
                debugger;
                return <Film key={film.name} film={film}/>
            })}
        </div>
    );
};

export default Films;
