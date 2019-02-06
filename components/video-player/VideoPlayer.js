import Slider from './slider/Slider';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoElementRef = null;
    this.sourceElementRef = null;

    this.state = {
      muted: false,
      status: 'pause',
      showButton: false,
      video: 0,
      volume: 30,
      loading: true,
      hoverClass: true,
    };
  }

  componentDidMount() {
    this.videoElementRef.controls = false;
  }

  onPlayHandler = () => {
    this.videoElementRef.play();
    this.setState({ status: 'play', showButton: false, hoverClass: false });
  };

  onNoLongerPauseHandler = () => {
    this.setState({ hoverClass: false });
  };

  onMouseOverHandler = () => {
    this.setState({ hoverClass: true });
  };

  onPauseHandler = () => {
    this.videoElementRef.pause();
    this.setState({ status: 'pause', showButton: false });
  };

  onStopHandler = () => {
    this.videoElementRef.pause();
    this.videoElementRef.currentTime = 0;
    this.setState({ status: 'stop', showButton: false });
  };

  onMuteHandler = () => {
    if (this.videoElementRef.muted) {
      this.videoElementRef.muted = false;
      this.setState({ muted: false });
    } else {
      this.videoElementRef.muted = true;
      this.setState({ muted: true });
    }
  };

  onVideoEndHandler = () => {
    this.videoElementRef.pause();
    this.videoElementRef.currentTime = 0;
    this.setState({ status: 'pause', showButton: true, hoverClass: true });
  };

  onCanPlayHandler = () => {
    setTimeout(() => {
      this.setState({ loading: false, showButton: true });
    }, 1500);
  };

  onSelectTrackHandler = video => {
    this.setState({
      video: video,
      status: 'pause',
      loading: true,
    });
    this.videoElementRef.load();
  };

  onSliderChange = rangeValue => {
    const volume = (this.state.volume / 100).toFixed(2);
    this.setState({ volume: rangeValue.value });
    this.videoElementRef.volume = volume;
  };

  render() {
    const { videos } = this.props;
    const {
      status,
      showButton,
      video,
      volume,
      muted,
      hoverClass,
      loading,
    } = this.state;
    const showButtonClass = showButton ? 'show-button' : '';
    const canHoverButton = hoverClass ? 'scale(1)' : 'scale(0)';
    const loadingScreen = loading ? (
      <div className="loading-screen">
        <img src="https://apettigrew.imgix.net/static/kag-logo.png" />
      </div>
    ) : null;

    return (
      <div className="container">
        <div className="video-display" onMouseOver={this.onMouseOverHandler}>
          {loadingScreen}
          <video
            onPlay={this.onNoLongerPauseHandler}
            onCanPlay={this.onCanPlayHandler}
            onEnded={this.onVideoEndHandler}
            ref={element => (this.videoElementRef = element)}
            className="video-player"
            id="video-player"
          >
            <source
              ref={element => (this.sourceElementRef = element)}
              src={videos[video].src}
              type={videos[video].type}
            />
          </video>
          <div className="play-controls">
            {status === 'pause' ? (
              <button
                className={`play center-button ${showButtonClass}`}
                onClick={this.onPlayHandler}
              >
                <img src="/static/icons/video-player/play.svg" alt="play" />
              </button>
            ) : (
              <button
                className={`play center-button ${showButtonClass}`}
                onClick={this.onPauseHandler}
              >
                <img src="/static/icons/video-player/pause.svg" alt="pause" />
              </button>
            )}
          </div>
          <div className="media-controls">
            <Slider defaultVal={volume} onSliderChange={this.onSliderChange} />
            <button onClick={this.onMuteHandler} className="small-button">
              {muted ? (
                <img src="/static/icons/video-player/mute.svg" />
              ) : (
                <img src="/static/icons/video-player/unmute.svg" />
              )}
            </button>
          </div>
        </div>
        <ul className="track-list">
          {videos.map((video, index) => {
            let selectedTrackClass = '';
            if (video.src === videos[this.state.video].src) {
              selectedTrackClass = 'selected-track';
            } else {
              selectedTrackClass = '';
            }

            return (
              <li
                onClick={() => this.onSelectTrackHandler(index)}
                key={video.title}
                className={`track ${selectedTrackClass}`}
              >
                <span className="title">
                  {video.title} - - {video.genre}
                </span>
              </li>
            );
          })}
        </ul>
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            margin-bottom: 6rem;
          }
          .video-display {
            position: relative;
          }

          .video-player {
            width: 100%;
            display: block;
          }

          .play-controls {
            position: absolute;
            padding: 0.2rem 0.4rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .play-controls .center-button {
            width: 6rem;
            transform: scale(0);
            transition: transform 200ms ease-out;
          }

          .container button {
            border: none;
            cursor: pointer;
            background: transparent;
            outline: none;
          }

          .video-display:hover .center-button {
            transform: ${canHoverButton};
          }

          .play-controls .show-button {
            transform: scale(1);
          }

          .play-controls .center-button img {
            width: 100%;
          }

          .track-list {
            position: relative;
            z-index: 100;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            background-color: #1d1d1d;
            color: rgba(250, 250, 250, 0.8);
          }

          .track {
            display: flex;
            font-size: 0.875rem;
            border-top: 1px solid white;
            cursor: pointer;
            font-family: 'Baloo Thambi';
            text-align: center;
          }

          .track:hover,
          .track:focus {
            background-color: #333333;
          }

          .selected-track {
            color: #ffff00;
          }

          .track .title {
            padding: 0.8rem 1rem;
            width: 100%;
          }

          .media-controls {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 5rem;
            height: 3rem;
            position: absolute;
            right: 0;
            opacity: 0.35;
            bottom: 0;
            right: 10px;
            transition: opacity 300ms ease-out;
          }

          .media-controls .small-button {
            position: relative;
            left: 8px;
            top: 15px;
            width: 2.5rem;
          }

          .media-controls:hover {
            opacity: 1;
          }

          @media (min-width: 600px) {
            .track {
              font-size: 1.25rem;
            }

            .media-controls {
              right: 20px;
              bottom: 20px;
              width: 7rem;
            }

            .media-controls .small-button {
              width: 3.5rem;
            }
          }
        `}</style>
        <style jsx global>
          {`
            .loading-screen {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              background: rgba(0, 0, 0, 0.8);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 100;
            }

            .loading-screen img {
              width: 4rem;
              perspective: 1000px;
              animation: spin 2s infinite alternate ease-in-out;
            }

            @keyframes spin {
              0% {
                transform: rotate(0);
              }
              50% {
                transform: rotate(180deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @media (min-width: 600px) {
              .loading-screen img {
                width: 7rem;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default VideoPlayer;
