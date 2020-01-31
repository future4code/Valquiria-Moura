import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import 'typeface-roboto';
import { createTask } from "../../actions/createTask";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const PostCardContainer = styled.div`
margin: 10px;
display: flex;
height: 200px;
`;

const LineCard = styled.hr`
width: 150px;
`;

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
      "text": event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value });
  };

  handleClickSendTask = (text, day) => {
    console.log(text, day)
    this.props.createNewTask(text, day)
    this.setState({
        text: "",
        day: "",
    })
}
  

  render() {
    const { text, day } = this.state;
    
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
            value={day}
            onChange={this.handleChange('day')}
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
        
        <PostCardContainer>

          <Card>
            <CardContent>
              
              <Typography variant="h6">
                Segunda-feira
              </Typography>
              
              <LineCard />
              
              <Typography component="p">
              </Typography>
            
            </CardContent>
          </Card>
        
          <Card>
            <CardContent>
              
              <Typography variant="h6">
                Terça-feira
              </Typography>
            
              <LineCard />
            
              <Typography component="p">
              </Typography>
            
            </CardContent>
          
          </Card>
          
          <Card>
            <CardContent>
              
              <Typography variant="h6">
                Quarta-feira
              </Typography>
            
              <LineCard />
            
              <Typography component="p">
              </Typography>
          
            </CardContent>
          </Card>
        
        <Card>
          <CardContent>
            
            <Typography variant="h6">
              Quinta-feira
            </Typography>
            
            <LineCard />
            
            <Typography component="p">
            </Typography>
          
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <Typography variant="h6">
              Sexta-feira
            </Typography>
            
            <LineCard />
            
            <Typography component="p">
            </Typography>

          </CardContent>
        </Card>

        <Card>
          <CardContent>
            
            <Typography variant="h6">
              Sábado
            </Typography>
            
            <LineCard />
            
            <Typography component="p">
            </Typography>
          
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            
            <Typography variant="h6">
              Domingo
            </Typography>
            
            <LineCard />
            
            <Typography component="p">
              Testando tarefa
            </Typography>
          
          </CardContent>
        </Card>
      
      </PostCardContainer>  

      </MainContainer>
    ); 
    
  }

}

const mapStateToProps = state => ({
  allTasks: state.taskReducer.allTasks
})

const mapDispatchToProps = dispatch => ({
  createNewTask: (text, day) => dispatch(createTask(text, day))
})


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
