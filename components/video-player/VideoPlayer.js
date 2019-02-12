import Slider from './slider/Slider';
import ProgressBar from './progress-bar/ProgressBar';

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
      tracksShowing: false,
      duration: 0,
      currentTime: 0,
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
    this.setState((prevState, props) => ({
      loading: false,
      showButton: true,
      duration: this.videoElementRef.duration,
      currentTime: this.videoElementRef.currentTime,
    }));
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

  onTrackListClickHandler = () => {
    this.setState((prevState, props) => ({
      tracksShowing: !prevState.tracksShowing,
    }));
  };

  onTimeUpdateHandler = e => {
    e.persist();
    this.setState((prevState, props) => ({
      currentTime: e.target.currentTime,
    }));
  };

  onProgressBarChange = e => {
    e.persist();
    this.setState((prevState, props) => ({
      currentTime: parseInt(e.target.value, 10),
    }));
    this.videoElementRef.currentTime = e.target.value;
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
      tracksShowing,
      duration,
      currentTime,
    } = this.state;
    const showButtonClass = showButton && !loading ? 'show-button' : '';
    const canHoverButton = hoverClass ? 'scale(1)' : 'scale(0)';
    const showTracksClass = tracksShowing ? 'show-tracks' : '';
    const loadingScreen = loading ? (
      <div className="loading-screen">
        <img
          src="https://apettigrew.imgix.net/static/kag-logo.png"
          alt="paperkag logo"
        />
      </div>
    ) : null;

    return (
      <div className="container">
        <div className="video-display" onMouseOver={this.onMouseOverHandler}>
          {loadingScreen}
          <video
            onTimeUpdate={this.onTimeUpdateHandler}
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
                aria-label="play button"
                className={`play center-button ${showButtonClass}`}
                onClick={this.onPlayHandler}
              >
                <img src="/static/icons/video-player/play.svg" alt="play" />
              </button>
            ) : (
              <button
                aria-label="pause button"
                className={`play center-button ${showButtonClass}`}
                onClick={this.onPauseHandler}
              >
                <img src="/static/icons/video-player/pause.svg" alt="pause" />
              </button>
            )}
          </div>
          <div className="media-controls">
            <Slider
              onMuteHandler={this.onMuteHandler}
              muted={muted}
              defaultVal={volume}
              onSliderChange={this.onSliderChange}
            />
            <ProgressBar
              onProgressBarChangeHandler={this.onProgressBarChange}
              duration={duration}
              currentTime={currentTime}
              onSliderChange={this.onSliderChange}
            />
            <button
              aria-label="show videos"
              onClick={this.onTrackListClickHandler}
              className="small-button"
            >
              <img
                src="/static/icons/video-player/track-list.svg"
                alt="show videos icon"
              />
            </button>
          </div>
        </div>
        <ul className={`track-list ${showTracksClass}`}>
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
            margin-top: 0;
            margin-bottom: 6rem;
          }
          .video-display {
            position: relative;
            z-index: 10;
            box-sizing: border-box;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);
          }

          .video-player {
            width: 100%;
            display: block;
          }

          .play-controls {
            position: absolute;
            z-index: 100;
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
            z-index: 0;
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            background-color: #1d1d1d;
            color: rgba(250, 250, 250, 0.8);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 100ms ease-out;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);
          }

          .track-list.show-tracks {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .track {
            display: flex;
            font-size: 0.875rem;
            border-top: 1px solid white;
            cursor: pointer;
            font-family: 'Baloo Thambi', 'Sans-Serif';
            text-align: center;
            transform-origin: 50% 100%;
            transform: scaleY(0);
            opacity: 0;
            transition: all 200ms 100ms ease-out;
          }

          .show-tracks .track {
            transform: scaleY(1);
            opacity: 1;
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
            z-index: 100;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 30px;
            padding: 2px;
            position: absolute;
            right: 0;
            opacity: 0.35;
            bottom: 0;
            transition: opacity 300ms ease-out;
          }

          .media-controls .small-button {
            width: 2.5rem;
          }

          .media-controls .small-button img {
            width: 100%;
          }

          .media-controls:hover {
            opacity: 1;
          }

          @media (min-width: 600px) {
            .track {
              font-size: 1.25rem;
            }
          }
          @media (min-width: 1200px) {
            .container {
              margin-top: 2rem;
              margin-bottom: 10rem;
            }
            .video-display {
              position: relative;
              z-index: 10;
              border-right: 10px solid #1d1d1d;
              border-top: 10px solid #1d1d1d;
              border-left: 10px solid #1d1d1d;
              transition: border 100ms ease-out;
            }

            .media-controls {
              opacity: 1;
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
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(0, 0, 0, 1) 0%,
                rgba(64, 64, 64, 1) 90.2%
              );
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

            button {
              border: none;
              cursor: pointer;
              background: transparent;
              outline: none;
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
