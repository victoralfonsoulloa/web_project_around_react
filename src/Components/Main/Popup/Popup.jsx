import closeButton from '../../../images/close-button.png'

export default function Popup(props) {
  const { title, children } = props;

  return (
    <div className="popup popup_type_change_avatar" id="popup-change_avatar">
      <div className="popup__container">
        <form className="form" id="form--add">
          <fieldset className="form__fieldset">
            <h2 className="form__title">{title}</h2>
            {children}
            <button type="submit" className="form__button" id="form__button">
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
            src={closeButton}
            alt="button-close_icon"
            className="popup__button-icon"
          />
        </button>
      </div>
    </div>
  );
}
