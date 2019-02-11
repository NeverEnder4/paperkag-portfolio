class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesRendered: false,
      imagesLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({ imagesRendered: true });
  }

  onImgLoadHandler = () => {
    this.setState({ imagesLoaded: true });
  };
  render() {
    const { imagesRendered, imagesLoaded } = this.state;
    const { imagesArray, displayName, description, onImgClick } = this.props;
    const showImagesClass = imagesRendered && imagesLoaded ? 'show-images' : '';
    return (
      <React.Fragment>
        <div className="display-container">
          <h1 className="display-name">{displayName}</h1>
          <h2 className="display-description">{description}</h2>
          <ul className="image-gallery">
            {imagesArray.map((image, index) => (
              <li key={index}>
                <img
                  onLoad={this.onImgLoadHandler}
                  onClick={onImgClick}
                  className={`image-item ${showImagesClass}`}
                  src={image.path}
                  alt={image.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
          .display-container {
            padding: 0 10px 3rem 10px;
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
            transition: all 200ms ease-out;

            cursor: pointer;
            opacity: 0;
          }

          .image-gallery img.show-images {
            opacity: 1;
          }

          .image-gallery img:hover {
            opacity: 0.7;
            transform: translateY(-3px);
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
          }

          .display-name {
            font-family: 'Baloo Thambi';
            margin: 0.3rem 0 0 0;
            text-transform: uppercase;
            font-size: 1.5rem;
          }

          .display-description {
            font-family: 'Baloo Thambi';
            margin: 0 0 0.2rem 0;
            color: #444444;
            font-weight: 200;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-size: 1rem;
          }

          @media (min-width: 600px) {
            .display-name {
              font-size: 1.875rem;
            }
            .display-description {
              font-size: 1.25rem;
            }
          }
          @media (min-width: 1025px) {
            .display-container {
              text-align: left;
            }
            .display-name {
              margin: 2rem 0 0 0;
              font-size: 2.25rem;
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
      </React.Fragment>
    );
  }
}

export default ImageDisplay;
