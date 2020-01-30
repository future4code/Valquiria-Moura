import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import 'typeface-roboto';
import { createTask } from "../../actions/createTask";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;

const Inputs = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const days = [
  {
    value: 0,
    label: 'Domingo',
  },
  {
    value: 1,
    label: 'Segunda',
  },
  {
    value: 2,
    label: 'Terça',
  },
  {
    value: 3,
    label: 'Quarta',
  },
  {
    value: 4,
    label: 'Quinta',
  },
  {
    value: 5,
    label: 'Sexta',
  },
  {
    value: 6,
    label: 'Sábado',
  },
];

class Planner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      day: '',
    }

  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value });
  };

  handleClickSendTask = (text, day) => {
    this.props.createNewTask(text, day)
    this.setState({
        text: "",
        day: "",
    })
}
  

  render() {
    const { day } = this.state;
    const { text } = this.setState
    return (
      <MainContainer>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <h1> Planner Semanal </h1>
        <Inputs>
        <TextField
          onChange={this.handleFieldChange}
          name="inserirTarefa"
          type="text"
          label="Insira aqui sua tarefa"
          value={text}
        />
        <TextField
          id="standard-select-day"
          select
          label="Dia da semana"
          // className={classes.textField}
          value={day}
          onChange={this.handleChange('day')}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu,
          //   },
          // }}
          helperText="Quando a sua tarefa deve ser realizada."
          margin="normal"
        >
          {days.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button onClick={() => this.handleClickSendTask(text, day)}> Adicionar tarefa </Button>
        </Inputs>
        
        
      </MainContainer>
    ); 
    
  }

}

const mapDispatchToProps = dispatch => ({
  createNewTask: (text, day) => dispatch(createTask(text, day))
})


export default connect(null, mapDispatchToProps)(Planner);
