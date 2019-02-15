import React, { Component } from "react";
import PropTypes from "prop-types";
import { GetData } from "./GetData";
import './species.scss';

class Species extends React.Component {
    constructor(props){
        super(props);
        this.url = props.species;
        this.state = {
            species: []
        }
    }
    
    componentDidMount() {
        GetData(this.url, (data) => {
            this.setState({species: data})
        });
    }
    
    render() {
        return (
            <div className="species">
                <h3>Species: {this.state.species.name}</h3>
                <p>Classification: {this.state.species.classification}</p>
                {/*<pre>{JSON.stringify(this.state.species, null, 2)}</pre>*/}
            </div>
        );
    }
}

export default Species;
