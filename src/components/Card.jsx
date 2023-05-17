import PropTypes from "prop-types";

const Card = ({ character, quote, image }) => {
  return (
    <div className="card">
      <h2>{character}</h2>
      <p>{quote}</p>
      <img src={image} alt={character}  />
    </div>
  );
};

Card.propTypes = {
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

export default Card;
