import React, { useState } from 'react';
import './Leftbar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { RiVideoAddLine } from 'react-icons/ri';
import CreatePodcastModal from '../../modal/podcast/create/CreatePodcastModal';
import { BsMenuUp } from 'react-icons/bs';

const Leftbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isAsideVisible, setIsAsideVisible] = useState(true);

  const handleOpenAdd = () => {
    document.title = isOpenAdd ? "Blankcil" : "Create Podcast - Blankcil";
    setIsOpenAdd(!isOpenAdd);
  };

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <div className='leftbar'>
      
      <div onClick={toggleAside} className="hideButton">
        <BsMenuUp size={30} />
      </div>
      <aside className={isAsideVisible ? '' : 'hidden'}>
        <div className="item" onClick={toggleAside}><p >X</p></div>
        <div onClick={() => navigate("/blankcilUI")} className='item'>
          <p>Home</p>
          {/* <img src="https://t4.ftcdn.net/jpg/02/90/67/89/360_F_290678971_Bk11xnoP5lQw4US7wCSId6jcKmWSfDBg.jpg" alt="Home" /> */}
        </div>
        {user && (
          <>
            <div className='item' onClick={handleOpenAdd}>
              <RiVideoAddLine className='icon' />
              <p>Add</p>
            </div>
            <div className='item'>
              <RiVideoAddLine className='icon' />
              <p>Logout</p>
            </div>
            <CreatePodcastModal isOpen={isOpenAdd} onClose={handleOpenAdd} />
          </>
        )}
      </aside>
    </div>
  );
};

export default Leftbar;
