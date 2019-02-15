import React from "react";
import { GetData } from "./GetData";

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.filmUrl = props.film;
        this.state = {
            film: []
        }
    }
    
    componentDidMount() {
        GetData(this.filmUrl, (data) => {
           this.setState({film: data});
        });
    }
    
    
    render () {
        return (
            <div>
                <p>
                    {this.state.film.title};
                </p>
            </div>
        );
    }
};

export default Film;
