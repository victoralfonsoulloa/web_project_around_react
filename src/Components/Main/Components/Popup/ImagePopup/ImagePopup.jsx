import { useEffect } from 'react';

export default function ImagePopup(props) {
  const { imageUrl, caption, onClose } = props;

  useEffect(() => {
    console.log('Image URL:', imageUrl);
    console.log('Caption:', caption);
  }, [imageUrl, caption]);

  if (!imageUrl) {
    return null;
  }

  return (
    <div className="popup popup_type_image">
      <div className="popup__container-image">
        <img src={imageUrl} className="popup-picture" alt={caption} />
        <p className="popup-caption">{caption}</p>
        <button
          type="button"
          className="popup__button-close"
          id="popup__button-close-img"
          onClick={onClose}
        >
          <img
            src="../../../../images/close-button.png"
            alt="button-close_icon"
            className="popup__button-icon"
          />
        </button>
      </div>
    </div>
  );
}

{/* <div class="popup popup_type_image" id="popup_img">
<div class="popup__container-image">
  <img src="" class="popup-picture" alt="" />
  <p class="popup-caption"></p>
  <button
    type="button"
    class="popup__button-close"
    id="popup__button-close-img"
  >
    <img
      src="../images/close-button.png"
      alt="button-close_icon"
      class="popup__button-icon"
    />
  </button>
</div>
</div> */}

// <div class="popup popup_type_delete_card" id="popup_delete_card">
// <div class="popup__container">
//   <form class="form" id="form--delete_card">
//     <fieldset class="form__fieldset">
//       <h2 class="form__title">Are you sure?</h2>
//       <button type="submit" class="form__button" id="form__button">
//         Delete
//       </button>
//     </fieldset>
//   </form>
//   <button
//     type="button"
//     class="popup__button-close"
//     id="popup__button-close-delete_card"
//   >
//     <img
//       src="../images/close-button.png"
//       alt="button-close_icon"
//       class="popup__button-icon"
//     />
//   </button>
// </div>
// </div>