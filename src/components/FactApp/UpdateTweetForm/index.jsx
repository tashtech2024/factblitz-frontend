import { Modal, Form, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";

function UpdateFactForm({ onClose, fact, UpdateFact }) {
    const [newFactContent, setNewFactContent] = useState(fact.content);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTweet(fact._id, newFactContent);
        onClose();
    }

  return (
    <div
      className="modal show"
      style={{
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal.Dialog style={{ minWidth: '500px'}}>
        <div>
          <IoMdClose onClick={onClose} />
        </div>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className=''>
            <Form.Control
              className="mb-4"
              type="text"
              name="content"
              id="content"
              value={newFactContent}
              onChange={(e) => setNewFactContent(e.target.value)}
            />

            <Button type="submit">Update</Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

UpdateFactForm.propTypes = {
    fact: PropTypes.object,
    onClose: PropTypes.func,
    updateFact: PropTypes.func,
  };

export default UpdateFactForm;