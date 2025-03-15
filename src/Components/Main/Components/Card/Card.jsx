import deleteButton from '../../../../images/delete-button.png';
import likeButton from '../../../../images/like-button.png';

export default function Card(props) {
  const { name, link } = props.card;
  const { onImageClick } = props;

  return (
    <li className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => onImageClick(link, name)}
      />
      <button className="card__delete-image">
        <img
          src={deleteButton}
          alt="Delete button icon"
          className="card__delete-image-icon"
        />
      </button>
      <div className="card__caption">
        <p className="card__caption_title">{name}</p>
        <button className="card__caption_like">
          <img
            src={likeButton}
            alt="Like button"
            className="card__caption-like_icon"
          />
        </button>
      </div>
    </li>
  );
}
