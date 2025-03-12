import { useState } from 'react';
import addButton from '../../images/add-button.png';
import editIcon from '../../images/edit_icon.svg';
import editButton from '../../images/edit-button.png';
import profilePicture from '../../images/linkedin-profile.jpeg';
import Popup from './Components/Popup/Popup.jsx';
import NewCard from './Components/Popup/Form/NewCard/NewCard.jsx';
import EditAvatar from './Components/Popup/Form/EditAvatar/EditAvatar.jsx';
import EditProfile from './Components/Popup/Form/EditProfile/EditProfile.jsx';
import Card from './Components/Card/Card.jsx';

export default function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const newCardPopup = { title: 'New Place', children: <NewCard /> };
  const editAvatarPopup = {
    title: 'Change Profile Picture',
    children: <EditAvatar />,
  };
  const editProfilePopup = { title: 'Edit Profile', children: <EditProfile /> };
  const cards = [
    {
      isLiked: false,
      _id: '5d1f0611d321eb4bdcd707dd',
      name: 'Yosemite Valley',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:10:57.741Z',
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707de',
      name: 'Lake Louise',
      link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
      owner: '5d1f0611d321eb4bdcd707dd',
      createdAt: '2019-07-05T08:11:58.324Z',
    },
  ];

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__image"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              src={profilePicture}
              alt="A profile picture"
              className="profile__image-user"
              id="profile__image-user"
            />
            <img
              src={editIcon}
              alt="Edit profile"
              className="profile__image-edit"
            />
          </div>

          <div className="profile__bio">
            <div className="profile__bio-container">
              <h1 className="profile__bio-name">Victor Ulloa</h1>
              <button
                className="profile__bio-open-popup"
                id="profile__bio-open-popup"
                onClick={() => handleOpenPopup(editProfilePopup)}
              >
                <img
                  src={editButton}
                  alt="Edit button"
                  className="profile__bio-open-icon"
                />
              </button>
            </div>
            <h2 className="profile__bio-description">Software Engineer</h2>
          </div>
        </div>
        <button
          className="profile__bio-add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img src={addButton} alt="Add button" className="profile__add-icon" />
        </button>
      </section>
      <section className="cards"> 
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
