import Slider from './slider/Slider';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoElementRef = null;
    this.sourceElementRef = null;

    this.state = {
      muted: false,
      status: 'pause',
      showButton: true,
      video: 0,
      volume: 40,
    };
  }

  componentDidMount() {
    this.videoElementRef.controls = false;
  }

  onPlayHandler = () => {
    this.videoElementRef.play();
    this.setState({ status: 'play', showButton: false });
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
    this.setState({ status: 'pause', showButton: true });
  };

  onSelectTrackHandler = video => {
    this.setState({ video: video, status: 'pause', showButton: true });
    this.videoElementRef.load();
  };

  onSliderChange = rangeValue => {
    const volume = (this.state.volume / 100).toFixed(2);
    console.log(volume);
    this.setState({ volume: rangeValue.value });
    this.videoElementRef.volume = volume;
  };

  render() {
    const { videos } = this.props;
    const { status, showButton, video, volume, muted } = this.state;
    const showButtonClass = showButton ? 'show-button' : '';

    return (
      <div className="container">
        <div className="video-display">
          <video
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

          .play-controls:hover .center-button {
            transform: scale(1);
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
            width: 40%;
            position: absolute;
            bottom: -5px;
            right: 5px;
          }

          .media-controls .small-button {
            width: 2.5rem;
            opacity: 0.5;
            transition: opacity 300ms ease-out;
          }

          .media-controls:hover .small-button {
            opacity: 1;
          }

          @media (min-width: 600px) {
            .track {
              font-size: 1.5rem;
            }

            .media-controls .small-button {
              width: 4rem;
            }

            .media-controls {
              display: flex;
              width: 20%;
              position: absolute;
              bottom: -10px;
              right: 10px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default VideoPlayer;
