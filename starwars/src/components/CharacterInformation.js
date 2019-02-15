import React from "react";

const CharacterInformation = ( props ) => {
    const keys = Object.keys(props.character);
    return (
        <div className="char-info">
            <h1 className="char-info__name">{props.character.name}</h1>
            <ul>
                {keys.map((key) => {
                    if (key !== "name"){
                        return (<li key={key}>{key + ": " + props.character[key]}</li>)
                    }
                })}
            </ul>
        </div>
    );
};

export default CharacterInformation;
