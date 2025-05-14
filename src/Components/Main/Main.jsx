import { useEffect, useState, useContext } from 'react';
import addButton from '../../images/add-button.png';
import editIcon from '../../images/edit_icon.svg';
import editButton from '../../images/edit-button.png';
import Popup from './Components/Popup/Popup.jsx';
import NewCard from './Components/Popup/Form/NewCard/NewCard.jsx';
import EditAvatar from './Components/Popup/Form/EditAvatar/EditAvatar.jsx';
import EditProfile from './Components/Popup/Form/EditProfile/EditProfile.jsx';
import Card from './Components/Card/Card.jsx';
import RemoveCard from './Components/Popup/Form/RemoveCard/RemoveCard.jsx';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { api } from '../../utils/api.js';

export default function Main() {
  const [cards, setCards] = useState([])

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser.about)

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Failed to fetch cards:", err);
      });
  }, []);
  

  // State to manage the currently active popup
  const [popup, setPopup] = useState(null);

  // Function to open a popup and optionally pass image URL and caption
  function handleOpenPopup(popup, imageUrl = '', caption = '') {
    if (popup.type === 'image') {
      setPopup({ ...popup, imageUrl, caption });
    } else {
      setPopup(popup);
    }
    console.log('Popup state:', popup);
  }

  // Function to close the currently active popup
  function handleClosePopup() {
    setPopup(null);
  }

  // Function to handle image click and open the image popup
  function handleImageClick(imageUrl, caption) {
    console.log(
      'Opening image popup with URL:',
      imageUrl,
      'and caption:',
      caption
    );
    handleOpenPopup({ type: 'image' }, imageUrl, caption);
  }

  // Popup configurations for different actions
  const newCardPopup = {
    title: 'New Place',
    children: <NewCard />,
    type: 'form',
  };
  const editAvatarPopup = {
    title: 'Change Profile Picture',
    children: <EditAvatar />,
    type: 'form',
  };
  const editProfilePopup = {
    title: 'Edit Profile',
    children: <EditProfile />,
    type: 'form',
  };

  const openImagePopup = { type: 'image' };

  // Popup configuration for deleting a card
  const deleteCardPopup = {
    title: 'Are you sure?',
    children: <RemoveCard />,
    type: 'form',
  };

  // Function to handle delete button click
  function handleDeleteClick() {
    handleOpenPopup(deleteCardPopup);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

  return (
    <main className="main">
      {/* Profile Section */}
      <section className="profile">
        <div className="profile__container">
          {/* Profile Picture */}
          <div
            className="profile__image"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              src={currentUser.avatar}
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

          {/* Profile Bio */}
          <div className="profile__bio">
            <div className="profile__bio-container">
              <h1 className="profile__bio-name">{currentUser.name}</h1>
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
            <h2 className="profile__bio-description">{currentUser.about}</h2>
          </div>
        </div>
        {/* Add New Card Button */}
        <button
          className="profile__bio-add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img src={addButton} alt="Add button" className="profile__add-icon" />
        </button>
      </section>

      {/* Cards Section */}
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onImageClick={handleImageClick}
            onDeleteClick={handleDeleteClick} // Pass delete handler to Card
            onCardLike = {handleCardLike}
          />
        ))}
      </section>

      {/* Popup Component */}
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          type={popup.type}
          imageUrl={popup.imageUrl}
          caption={popup.caption}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
