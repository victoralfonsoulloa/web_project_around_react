import React from 'react';
import closeButton from '../../../../images/close-button.png';

export default function Popup(props) {
  const { onClose, title, children, type, imageUrl, caption } = props;

  return (
    <div className={`popup ${type === 'image' ? 'popup_type_image' : ''}`}>
      <div
        className={
          type === 'image' ? 'popup__container-image' : 'popup__container'
        }
      >
        {/* Form Popup */}
        {type !== 'image' && (
          <form className="form" id="form--add">
            <fieldset className="form__fieldset">
              {title && <h2 className="form__title">{title}</h2>}
              {children}
            </fieldset>
          </form>
        )}

        {/* Image Popup */}
        {type === 'image' && (
          <>
            <img src={imageUrl} className="popup-picture" alt={caption} />
            <p className="popup-caption">{caption}</p>
          </>
        )}

        {/* Close Button */}
        <button
          type="button"
          className="popup__button-close"
          id={
            type === 'image'
              ? 'popup__button-close-img'
              : 'popup__button-close-change-avatar'
          }
          onClick={onClose}
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
