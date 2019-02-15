import React, { Component, PropTypes } from "react";
import './GetData';
import { GetData } from "./GetData";

class HomeWorld extends React.Component {
    constructor(props){
        debugger;
        super(props);
        this.url = props.homeWorld;
        this.state = {
            homeWorld: []
        }
    }
    
    componentDidMount() {
        GetData(this.url, (data) => {
            this.setState({homeWorld: data})
        })
    }
    
    render() {
        return (
            <div>
                <h3>HomeWorld: {this.state.homeWorld.name}</h3>
                <p>Climate: {this.state.homeWorld.climate}</p>
                <p>Terrain: {this.state.homeWorld.terrain}</p>
                {/*<pre>{JSON.stringify(this.state.homeWorld, null, 2)}</pre>*/}
            </div>
        );
    }
}

export default HomeWorld;
