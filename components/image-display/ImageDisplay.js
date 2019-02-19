class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
      imagesLoaded: false,
    };
    this.imgElementRef = [];
  }
  componentDidMount() {
    this.setState({ rendered: true });

    // If images get cached and no longer fire the onload event, this will set imagesLoaded state to true
    const imagesAlreadyLoaded = this.imgElementRef.some(img => img.complete);
    if (imagesAlreadyLoaded) this.setState({ imagesLoaded: true });
  }

  onImgLoadHandler = () => {
    this.setState({ imagesLoaded: true });
  };

  render() {
    const { rendered, imagesLoaded } = this.state;
    const { imagesArray, displayName, description, onImgClick } = this.props;
    const showImagesClass = rendered && imagesLoaded ? 'show-images' : '';

    return (
      <React.Fragment>
        <div className="display-container">
          <h1 className="display-name slide-in-right">{displayName}</h1>
          <h2 className="display-description slide-in-right delay">
            {description}
          </h2>
          <ul className="image-gallery slide-up">
            {imagesArray.map((image, index) => {
              const positionImageCenterBottom =
                displayName === 'Skateboarding' && index === 1
                  ? 'position-image-center-bottom'
                  : '';
              const positionImageCenterTop =
                displayName === 'Photo Shoots' && index === 1
                  ? 'position-image-center-top'
                  : '';
              return (
                <li
                  key={index}
                  data-url={`${image.url}`}
                  data-imgsrc={`${image.url}?w=1000&format=compress`}
                  data-imgalt={image.alt}
                  onClick={onImgClick}
                  className={`image-item ${showImagesClass} `}
                >
                  <img
                    ref={element => this.imgElementRef.push(element)}
                    className={`img-item-preview ${positionImageCenterBottom} ${positionImageCenterTop}`}
                    onLoad={this.onImgLoadHandler}
                    srcSet={`${image.srcSetLg}, ${image.srcSetMd}, ${
                      image.srcSetSm
                    }`}
                    src={image.src}
                    alt={image.alt}
                  />
                </li>
              );
            })}
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

          .img-item-preview {
            backface-visibility: hidden;
            width: 100%;
            height: 100%;
            object-fit: cover;
            color: rgba(250, 250, 250);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Baloo Thambi', 'Sans-Serif';
            font-size: 1.2rem;
            text-align: center;
          }

          .position-image-center-bottom {
            object-position: 50% 80%;
          }

          .position-image-center-top {
            object-position: 50% 20%;
          }

          .image-gallery li {
            position: relative;
            margin-bottom: 1rem;
            width: 100%;
            height: 35vh;
            min-height: 200px;
            cursor: pointer;
            opacity: 0;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
            transition: transform 200ms ease-out;
            background: #1d1d1d;
          }

          .image-gallery li::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: all 200ms ease-out;
          }

          .image-gallery li:hover {
            transform: translate3d(0px, -5px, 0px);
          }

          .image-gallery li:hover::after {
            opacity: 1;
          }

          .image-gallery li.show-images {
            opacity: 1;
          }

          .display-name {
            font-family: 'Baloo Thambi', 'Sans-Serif';
            margin: 0.3rem 0 0 0;
            text-transform: uppercase;
            font-size: 1.5rem;
          }

          .display-description {
            font-family: 'Baloo Thambi', 'Sans-Serif';
            margin: 0 0 0.2rem 0;
            color: #444444;
            font-weight: 200;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-size: 1rem;
          }

          .slide-up {
            opacity: 0;
            animation: slide-up 0.5s ease forwards 1.3s;
          }

          .slide-in-right {
            opacity: 0;
            animation: slide-in-right 0.8s ease forwards 0.6s;
          }

          .slide-in-right.delay {
            opacity: 0;
            animation: slide-in-right 0.8s ease forwards;
            animation-delay: 0.8s;
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(-15px);
            }
            to {
              opacity: 1;
              transform: translateX(0px);
            }
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
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default ImageDisplay;
