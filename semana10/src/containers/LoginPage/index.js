import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import logo from "../imagens/logo.jpg";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: white;
`;

const Logo = styled.img`
width: 300px;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }


  handleFieldChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  render() {
    const { email, password } = this.state;
    return (
      <LoginWrapper>
        <Logo src={logo} alt="FutureX - logo"/>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.props.vaiParaListaViagens}>Login</Button>
        <Button onClick={this.props.voltar}>Voltar</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  vaiParaListaViagens: () => dispatch(push("/trips/list")),
  voltar: () => dispatch(push("/"))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
