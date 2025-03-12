import closeButton from '../../../../images/close-button.png'

export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div className="popup__container">
        <form className="form" id="form--add">
          <fieldset className="form__fieldset">
            <h2 className="form__title">{title}</h2>
            {children}
          </fieldset>
        </form>
        <button
          type="button"
          className="popup__button-close"
          id="popup__button-close-change-avatar"
          onClick={ onClose } 
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

