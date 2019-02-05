const ImageDisplay = ({ imagesArray, displayName, description }) => {
  return (
    <div className="display-container">
      <h1 className="display-name">{displayName}</h1>
      <h2 className="display-description">{description}</h2>
      <ul className="image-gallery">
        {imagesArray.map((image, index) => (
          <li key={index}>
            <img className="image-item" src={image.path} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .display-container {
          padding: 0 10px 2rem 10px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .image-gallery {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .image-gallery li {
          margin-bottom: 0.5rem;
        }

        .image-gallery img {
          width: 100%;
          transition: all 100ms ease-out;
          cursor: pointer;
        }

        .image-gallery img:hover {
          opacity: 0.7;
          transform: translateY(-3px);
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
        }

        .display-name {
          font-family: 'Baloo Thambi';
          margin: 1rem 0 0 0;
          text-transform: uppercase;
        }

        .display-description {
          font-family: 'Baloo Thambi';
          margin: 0 0 0.2rem 0;
          color: #444444;
          font-weight: 200;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        @media (min-width: 1025px) {
          .display-container {
            text-align: left;
          }
          .display-genre {
            margin: 2rem 0 0 0;
            font-size: 3rem;
          }

          .image-gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .image-gallery li {
            width: 48.3%;
            margin: 5px 5px;
          }

          .image-gallery img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay;
