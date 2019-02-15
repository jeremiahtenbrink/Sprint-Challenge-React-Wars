import React, { Component } from "react";
import { GetData } from "./GetData";
import './species.scss';

class Species extends Component {
    constructor(props){
        super(props);
        this.url = props.species;
        this.state = {
            species: []
        }
    }
    
    componentDidMount() {
        if (this.url){
            GetData(this.url, (data) => {
                this.setState({species: data})
            });
        }
    }
    
    render() {
        return (
            <div className="species">
                {/*<h3>Species: {(this.state.species.name ? this.state.species.name : '')}</h3>*/}
                {/*<p>Classification: {(this.state.species.classification ? this.state.species.classification : '')}</p>*/}
                {/*<pre>{JSON.stringify(this.state.species, null, 2)}</pre>*/}
            </div>
        );
    }
}

export default Species;
