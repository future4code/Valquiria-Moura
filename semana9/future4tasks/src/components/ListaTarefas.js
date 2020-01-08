import React from "react";
import TaskItem from "./TaskItem"
// import { connect } from 'react-redux';

class ListaTarefas extends React.Component {
    render() {
        return this.props.listaTarefas.map(tarefas => (<TaskItem tarefas={tarefas}/>) 
            );
        }
    }

// const mapStateToProps = (state) => ({
//     listaTarefas: state.tarefas.todo,
//   });

export default ListaTarefas 

// connect(mapStateToProps)(ListaTarefas)

//   componentDidMount(){
//     this.props.getAllPosts();
//   }

// const mapDispatchToProps = (dispatch) => ({
//   getAllPosts: () => dispatch(getPosts()),
// });

