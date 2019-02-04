const ImageDisplay = ({ imagesArray, displayName }) => {
  return (
    <div className="display-container">
      <h1 className="art-genre">{displayName}</h1>
      <ul className="picture-gallery">
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
        .picture-gallery {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .picture-gallery li {
          margin-bottom: 0.5rem;
        }

        .picture-gallery img {
          width: 100%;
          transition: all 100ms ease-out;
          cursor: pointer;
        }

        .picture-gallery img:hover {
          opacity: 0.7;
          transform: translateY(-3px);
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
        }

        .art-genre {
          font-family: 'Baloo Thambi';
          margin: 1rem 0 0 0;
          text-transform: uppercase;
        }
        @media (min-width: 1025px) {
          .display-container {
            text-align: left;
          }
          .art-genre {
            margin: 2rem 0 0 0;
            font-size: 3rem;
          }

          .picture-gallery {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .picture-gallery li {
            width: 48.3%;
            margin: 5px 5px;
          }

          .picture-gallery img {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay;
