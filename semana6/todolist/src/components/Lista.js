import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tarefa: []
        };
    }
    
onChangeTarefa = event => {
    this.setState({tarefa: event.target.value});
};
render() {
    return(
        <div>
        <ul> 
            <li> Testando </li>
        </ul>
        </div>
    )
}

}
  export default Lista;