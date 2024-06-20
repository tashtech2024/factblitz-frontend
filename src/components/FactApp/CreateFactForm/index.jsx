import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./CreateFactForm.module.css";
import { Button, Form } from "react-bootstrap";

function CreateFactForm({ addFact }) {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      inputRef.current.focus();
      return
    }
    addFact(content);
    setContent("");
    console.log(inputRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.container}>
      <Form.Label htmlFor="content">
        <h4>WhatChu Know?</h4>
      </Form.Label>

      <Form.Control
      className="mb-4"
        type="text"
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ref={inputRef}
      />

      <Button type="submit">Fact</Button>
    </Form>
  );
}

CreateFactForm.propTypes = {
  addFact: PropTypes.func,
};

export default CreateFactForm;





