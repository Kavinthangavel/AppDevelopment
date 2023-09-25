
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './AnimeVoting.css';
import naruto from '../Assets/images/naruto.jpg';
import OnePiece from '../Assets/images/OnePiece.jpg';
import dbz from '../Assets/images/dragonball.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import PollForm from './PollForm'; // Import the PollForm component
import Modal from 'react-modal'; // Import react-modal

const animeData = [
  {
    id: 1,
    title: 'Naruto',
    imageUrl: naruto,
  },
  {
    id: 2,
    title: 'One Piece',
    imageUrl: OnePiece,
  },
  {
    id: 3,
    title: 'Dragon Ball Z',
    imageUrl: dbz,
  },
];

const AnimeVoting = () => {
  const [votedAnime, setVotedAnime] = useState(null);

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store poll data
  const [pollData, setPollData] = useState(null);

  const handleVote = (animeId) => {
    setVotedAnime(animeId);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePollSubmit = (data) => {
    // Handle poll submission (e.g., add data to your list of animeData)
    // For example:
    // setAnimeData([...animeData, { id: animeData.length + 1, ...data }]);
    setPollData(data);
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className="anime-voting mx-auto">
          <h1 className='text-center text-primary mt-3 mb-5'>Vote for Your Favorite Anime</h1>
          <button className="create-poll-button" onClick={handleOpenModal}>
            Create a New Poll
          </button>
          <div className="anime-list">
            {animeData.map((anime) => (
              <div
                key={anime.id}
                className={`anime-item ${votedAnime === anime.id ? 'voted' : ''}`}
                onClick={() => handleVote(anime.id)}
              >
                <img
                  src={anime.imageUrl}
                  alt={anime.title}
                  width="200" // Set the desired width here
                  height="280" // Set the desired height here
                />
                <p>{anime.title}</p>
                <FontAwesomeIcon icon={faVoteYea} className="vote-icon" />
              </div>
            ))}
          </div>
          {votedAnime && (
            <p className="voted-message">You voted for {animeData.find((anime) => anime.id === votedAnime).title}!</p>
          )}
        </div>
      </div>
      <Footer />
      {/* Display the PollForm as a modal */}
      <PollForm isOpen={isModalOpen} onClose={handleCloseModal} onPollSubmit={handlePollSubmit} />
    </div>
  );
};

export default AnimeVoting;
