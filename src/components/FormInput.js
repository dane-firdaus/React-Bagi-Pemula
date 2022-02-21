import react from "react";
import Buttons from "./Button";
import "../styles/FormInput.css";
class FormInput extends react.Component {
  state = {
    text: "",
  };
  change = (e) => {
    this.setState({ text: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }
    this.setState({ text: "" });
  };
  render() {
    return (
      <form style={inputForm}>
        <input style={input} placeholder="add Task" type="text" onChange={this.change} value={this.state.text} onSubmit={this.submit} />
        <Buttons text="add" variant="btn-primary" action={this.submit} />
      </form>
    );
  }
}
export default FormInput;
const inputForm = {
  background: "#fff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};

const input = {
  width: "70%",
  border: "none",
};
