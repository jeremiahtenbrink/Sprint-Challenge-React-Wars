import React from "react";
import CharacterInformation from "./CharacterInformation";
import Films from "./Films";
import Species from "./Species";
import HomeWorld from "./HomeWorld";
import './StarWars.scss';

const Character = ( props ) => {
    const charInfo = {
        name: props.character.name,
        height: props.character.height,
        mass: props.character.mass,
        hair_color: props.character.hair_color,
        skin_color: props.character.skin_color,
        eye_color: props.character.eye_color,
        birth_year: props.character.birth_year,
        gender: props.character.gender,
    };
    return (
        <div className="character">
            
            <CharacterInformation key={charInfo.name} character={charInfo}/>
            <Films films={props.character.films}/>
            <div className="column-25">
                <Species species={props.character.species[0]}/>
                <HomeWorld homeWorld={props.character.homeworld} />
            </div>
            {/*<pre>{JSON.stringify(props.character, null, 2)}</pre>*/}
        </div>
    );
};

export default Character;
