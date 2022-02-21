import react from "react";
import Buttons from "./Button";
import "../styles/EditModal.css";

class EditModal extends react.Component {
  render() {
    const { data, edit, close, change, update } = this.props;
    if (edit) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Ini Edit</h3>
            <div className="input">
              <input type="text" value={data.title} onChange={change} />
            </div>
            <div className="btn-group">
              <Buttons text="Edit" variant="btn-success" action={update} />
              <Buttons text="Cencel" variant="btn-warning" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default EditModal;
