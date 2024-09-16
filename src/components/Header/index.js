// src/components/Navbar.js
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { GiTwoCoins } from 'react-icons/gi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import AvailableCreditsModal from '../AvailableCreditsModal';

import './index.css'; 

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <nav className="navbar">
      <div className="left-section">
        <Link to="/job">
         <MdMenu className="menu-icon" aria-label="Menu" />
         <img src="https://workisy.com/uploaded-images/logo/pnyd1i5u2KOpKGk5XcajI6MShDnWHVkzU9PND19N.png" alt="logo" className='workisy-logo'/>
        </Link>
      </div>
      <div className="right-section">
        <button className="nav-link" onClick={openModal}>
          <GiTwoCoins size={25} aria-label="Available Credits" />
          <span className="nav-text">Available Credits</span>
        </button>
        <button  className="nav-link">
          <AiFillQuestionCircle size={25} aria-label="Support" />
          <span className="nav-text">Support</span>
        </button>
        <div className="profile-section">
          <p className="profile-name">S</p>
        </div>
      </div>
    </nav>
    {isModalOpen && <AvailableCreditsModal onClose={closeModal} />}
    </> 
  );
}

export default Header;