// PollForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const PollForm = ({ isOpen, onClose, onPollSubmit }) => {
  const [animeName, setAnimeName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the poll data
    onPollSubmit({ animeName, image });
    // Reset the form
    setAnimeName('');
    setImage(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Create a New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="animeName">Anime Name</label>
          <input
            type="text"
            id="animeName"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default PollForm;
