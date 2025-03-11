import addButton from '../../images/add-button.png'
import editIcon from '../../images/edit_icon.svg'
import editButton from '../../images/edit-button.png'

export default function Main() {
    return (
        <main className="main">
          <section className="profile">
            <div className="profile__container">
              <div className="profile__image">
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
              <div
                className="popup popup_type_change_avatar"
                id="popup-change_avatar"
              >
                <div className="popup__container">
                  <form className="form" id="form--add">
                    <fieldset className="form__fieldset">
                      <h2 className="form__title">Change Profile Picture</h2>
                      <label className="form__field">
                        <input
                          type="url"
                          placeholder="Image URL"
                          name="image"
                          className="form__input"
                          id="avatar"
                          pattern="https://.*"
                          required
                        />
                        <span className="form__input-error avatar-error"></span>
                      </label>
                      <button
                        type="submit"
                        className="form__button"
                        id="form__button"
                      >
                        Save
                      </button>
                    </fieldset>
                  </form>
                  <button
                    type="button"
                    className="popup__button-close"
                    id="popup__button-close-change-avatar"
                  >
                    <img
                      src="./images/close-button.png"
                      alt="button-close_icon"
                      className="popup__button-icon"
                    />
                  </button>
                </div>
              </div>
    
              <div className="profile__bio">
                <div className="profile__bio-container">
                  <h1 className="profile__bio-name"></h1>
                  <button
                    className="profile__bio-open-popup"
                    id="profile__bio-open-popup"
                  >
                    <img
                      src={editButton}
                      alt="Edit button"
                      className="profile__bio-open-icon"
                    />
                  </button>
    
                  <div className="popup popup_type_edit" id="popup--edit">
                    <div className="popup__container">
                      <form className="form" id="form--edit">
                        <fieldset className="form__fieldset">
                          <h2 className="form__title">Edit Profile</h2>
                          <label for="form__field">
                            <input
                              type="text"
                              placeholder="Name"
                              name="name"
                              className="form__input"
                              id="name"
                              required
                              minlength="2"
                              maxlength="40"
                            />
                            <span className="form__input-error name-error"></span>
                          </label>
                          <label for="form__field">
                            <input
                              type="text"
                              placeholder="About me"
                              name="aboutMe"
                              className="form__input form__input-aboutMe"
                              id="aboutMe"
                              required
                              minlength="2"
                              maxlength="65"
                            />
                            <span className="form__input-error aboutMe-error"></span>
                          </label>
                          <button
                            type="submit"
                            className="form__button"
                            id="form__button"
                          >
                            Save
                          </button>
                        </fieldset>
                      </form>
                      <button
                        className="popup__button-close"
                        id="popup__button-close"
                      >
                        <img
                          src="./images/close-button.png"
                          alt="button-close_icon"
                          className="popup__button-icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <h2 className="profile__bio-description"></h2>
              </div>
            </div>
            <button className="profile__bio-add">
              <img
                src={addButton}
                alt="Add button"
                className="profile__add-icon"
              />
            </button>
            <div className="popup popup_type_add" id="popup-add">
              <div className="popup__container">
                <form className="form" id="form--add">
                  <fieldset className="form__fieldset">
                    <h2 className="form__title">New Place</h2>
                    <label className="form__field">
                      <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="form__input form__input-name"
                        id="title"
                        required
                        minlength="2"
                        maxlength="40"
                      />
                      <span className="form__input-error title-error"></span>
                    </label>
                    <label className="form__field">
                      <input
                        type="url"
                        placeholder="Image URL"
                        name="image"
                        className="form__input"
                        id="imageUrl"
                        pattern="https://.*"
                        required
                      />
                      <span className="form__input-error imageUrl-error"></span>
                    </label>
                    <button type="submit" className="form__button" id="form__button">
                      Save
                    </button>
                  </fieldset>
                </form>
                <button
                  type="button"
                  className="popup__button-close"
                  id="popup__button-close-add"
                >
                  <img
                    src="./images/close-button.png"
                    alt="button-close_icon"
                    className="popup__button-icon"
                  />
                </button>
              </div>
            </div>
          </section>
          <section className="cards"></section>
          <div className="popup popup_type_image" id="popup_img">
            <div className="popup__container-image">
              <img src="" className="popup-picture" alt="" />
              <p className="popup-caption"></p>
              <button
                type="button"
                className="popup__button-close"
                id="popup__button-close-img"
              >
                <img
                  src="./images/close-button.png"
                  alt="button-close_icon"
                  className="popup__button-icon"
                />
              </button>
            </div>
          </div>
    
          <div className="popup popup_type_delete_card" id="popup_delete_card">
            <div className="popup__container">
              <form className="form" id="form--delete_card">
                <fieldset className="form__fieldset">
                  <h2 className="form__title">Are you sure?</h2>
                  <button type="submit" className="form__button" id="form__button">
                    Delete
                  </button>
                </fieldset>
              </form>
              <button
                type="button"
                className="popup__button-close"
                id="popup__button-close-delete_card"
              >
                <img
                  src="./images/close-button.png"
                  alt="button-close_icon"
                  className="popup__button-icon"
                />
              </button>
            </div>
          </div>
        </main>
    )
} 