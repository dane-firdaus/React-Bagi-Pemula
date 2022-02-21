import react from "react";
import "../styles/Button.css";
import propTypes from "prop-types";
class Buttons extends react.Component {
  render() {
    return (
      <div>
        <button className={this.props.variant} onClick={this.props.action}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
export default Buttons;
Buttons.propTypes = {
  text: propTypes.string.isRequired,
  variant: propTypes.string.isRequired,
};
