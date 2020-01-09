import React, { Component } from "react";
import styled from "styled-components";
// import { connect } from 'react-redux';

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div> 
          <ul> 
              <li> {this.props.tarefas.text} </li>
          </ul>
      </div>
    );
  }
}

export default TaskItem
