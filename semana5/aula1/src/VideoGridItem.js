import React from 'react'
import './VideoGridItem.css'

class VideoGridItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUm: "",
            inputDois: "",
            inputTres: ""
        };
    }

    aoMudarInputUm = (e) => {
        this.setState({
            inputUm: e.target.value
        });
    };

    aoMudarInputDois = (e) => {
        this.setState({
            inputDois: e.target.value
        });
    };

    aoMudarInputTres = (e) => {
        this.setState({
            inputTres: e.target.value
        });
    };

    render() {
        return (
            <div>
			<h3>Input h3: {this.state.inputTres} </h3>
            <input
                value={this.state.inputTres}
                onChange={this.aoMudarInputTres}
            />

            <h2>Input h2: {this.state.inputDois} </h2>
            <input
                value={this.state.inputDois}
                onChange={this.aoMudarinputDois}
            />

            <h1>Input h1: {this.state.inputUm} </h1>
            <input
                value={this.state.inputUm}
                onChange={this.aoMudarInputUm}
            />
		</div>
        );
    }

}

export default VideoGridItem;