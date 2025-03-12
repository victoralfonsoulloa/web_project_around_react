import { useState } from 'react';
import addButton from '../../images/add-button.png';
import editIcon from '../../images/edit_icon.svg';
import editButton from '../../images/edit-button.png';
import Popup from './Components/Popup/Popup.jsx';
import NewCard from './Components/Popup/Form/NewCard/NewCard.jsx';
import EditAvatar from './Components/Popup/Form/EditAvatar/EditAvatar.jsx';
import EditProfile from './Components/Popup/Form/EditProfile/EditProfile.jsx';

export default function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
    console.log(popup)
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

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image" onClick={() => handleOpenPopup(editAvatarPopup)}>
            <img
              src=""
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
              <h1 className="profile__bio-name"></h1>
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
            <h2 className="profile__bio-description"></h2>
          </div>
        </div>
        <button className="profile__bio-add" onClick={() => handleOpenPopup(newCardPopup)}>
          <img
            src={addButton}
            alt="Add button"
            className="profile__add-icon"
          />
        </button>
      </section>
      <section className="cards"></section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
