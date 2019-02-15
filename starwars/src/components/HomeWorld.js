import React, { Component, PropTypes } from "react";
import './GetData';
import { GetData } from "./GetData";
import './homeworld.scss';

class HomeWorld extends React.Component {
    constructor(props){
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
            <div className="home-world">
                <h3>HomeWorld: {(this.state.homeWorld.name ?  this.state.homeWorld.name : '')}</h3>
                <p>Climate: {( this.state.homeWorld.climate ? this.state.homeWorld.climate : '')}</p>
                {/*<p>Terrain: {( this.state.homeWorld.terrain ? this.state.homeWorld.terrain : '')}</p>*/}
                {/*<pre>{JSON.stringify(this.state.homeWorld, null, 2)}</pre>*/}
            </div>
        );
    }
}

export default HomeWorld;
