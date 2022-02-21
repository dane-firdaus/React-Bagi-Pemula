import logo from "./logo.svg";
import "./App.css";
import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import react from "react";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends react.Component {
  state = {
    todos: [
      {
        id: "1",
        title: "reading aja",
      },
      {
        id: "2",
        title: "apa aja",
      },
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
    },
    isDelete: false,
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  delete = (id) => {
    console.log("Oke Bozz");
    this.setState({
      todos: this.state.todos.filter((item) => item.id != id),
    });
    this.setState({
      isDelete: false,
    });
  };
  addTask = (data) => {
    console.log("ashiap bozque");
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };
  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  openModalDelete = () => {
    this.setState({ isDelete: true });
  };
  closeModalDelete = () => {
    this.setState({ isDelete: false });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Todo List</h2>
        </div>

        <div className="List">
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} del={this.delete} close={this.closeModal} open={this.openModal} opens={this.openModalDelete} closes={this.closeModalDelete} />
          ))}
        </div>
        <div className="Input">
          <FormInput add={this.addTask} />
        </div>
        <EditModal edit={this.state.isEdit} close={this.closeModal} change={this.setTitle} data={this.state.editData} update={this.update} />
        {todos.map((item) => (
          <DeleteModal key={item.id} todo={item} deletes={this.state.isDelete} close={this.closeModalDelete} del={this.delete} />
        ))}
      </div>
    );
  }
}

export default App;
