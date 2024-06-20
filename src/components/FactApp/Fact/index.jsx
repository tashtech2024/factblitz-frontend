import { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import Button from "react-bootstrap/Button";
import UpdateFactForm from "../UpdateTweetForm";

function Fact ({ fact, removeFact, updateFact }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>{/* MODAL  */}
      {showModal &&
        createPortal(
          <UpdateFactForm onClose={() => setShowModal(false)} fact={fact} updateFact={updateFact}/>,
          document.body,
        )}

<div className="border p-3 my-3">
        <div>@{fact.username}</div>
        <div className="h6">{tweet.content}</div>


        <div className="d-flex">
          <div className="mx-2">
            <FaHeart /> {fact.likes}
          </div>
          <div>
            <LiaRetweetSolid size={22} /> {fact.repost}
          </div>
        </div>

        <div className="mt-2">
          <Button
            variant="danger"
            className="mx-2"
            onClick={() => removeFact(fact._id)}
          >
            delete
          </Button>
          <Button
            variant="info"
            className="mx-2"
            onClick={() => setShowModal(true)}
          >
            update
          </Button>
        </div>
      </div>
    </>
  );
}

Fact.propTypes = {
  Fact: PropTypes.object,
  removeFact: PropTypes.func,
  updateFact: PropTypes.func,
};

export default Fact;