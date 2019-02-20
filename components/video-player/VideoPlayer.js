import Slider from './slider/Slider';
import ProgressBar from './progress-bar/ProgressBar';
import TrackList from './track-list/TrackList';
import TracksListButton from './track-list-button/TrackListButton';

import { logEvent, extractFileNameFromUrl } from '../../static/utils/analytics';

const defaultState = {
  muted: false,
  status: 'pause',
  showPlayButton: false,
  currVideo: 0,
  volume: 30,
  loading: true,
  hoverClass: true,
  tracksShowing: false,
  duration: 0,
  currentTime: 0,
  playButtonClickedOnce: false,
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoElementRef = null;
    this.sourceElementRef = null;
    this.state = { ...defaultState };
  }

  componentDidMount() {
    this.videoElementRef.controls = false;
  }

  analyzeVideoPlays = () => {
    const remove = 'https://apettigrew.imgix.net/static/videos/';
    const fileName = extractFileNameFromUrl(this.sourceElementRef.src, remove);
    logEvent('Video Player', 'Play From Start', fileName, 1);
  };

  analyzeVideoPlayThroughs = () => {
    const remove = 'https://apettigrew.imgix.net/static/videos/';
    const fileName = extractFileNameFromUrl(this.sourceElementRef.src, remove);
    logEvent('Video Player', 'Played To End', fileName, 1);
  };

  onPlayHandler = e => {
    this.videoElementRef.play();

    if (this.state.playButtonClickedOnce === false) {
      this.setState((prevState, props) => ({
        playButtonClickedOnce: true,
      }));
    }
    this.setState({ status: 'play', showPlayButton: false, hoverClass: false });

    if (this.videoElementRef.currentTime === 0) this.analyzeVideoPlays(e);
  };

  onNoLongerPauseHandler = () => {
    this.setState({ hoverClass: false });
  };

  onMouseOverHandler = () => {
    this.setState({ hoverClass: true });
  };

  onPauseHandler = () => {
    this.videoElementRef.pause();
    this.setState({ status: 'pause', showPlayButton: false });
  };

  onStopHandler = () => {
    this.videoElementRef.pause();
    this.videoElementRef.currentTime = 0;
    this.setState({ status: 'stop', showPlayButton: false });
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
    this.analyzeVideoPlayThroughs();
    this.videoElementRef.pause();
    this.videoElementRef.currentTime = 0;
    this.setState({ status: 'pause', showPlayButton: true, hoverClass: true });
  };

  onCanPlayHandler = () => {
    this.setState((prevState, props) => ({
      loading: false,
      showPlayButton: true,
      duration: this.videoElementRef.duration,
      currentTime: this.videoElementRef.currentTime,
    }));
  };

  onSelectTrackHandler = video => {
    this.setState({
      currVideo: video,
      status: 'pause',
      loading: true,
      tracksShowing: false,
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
      showPlayButton,
      currVideo,
      volume,
      muted,
      hoverClass,
      loading,
      tracksShowing,
      duration,
      currentTime,
      playButtonClickedOnce,
    } = this.state;
    const showPlayButtonClass = showPlayButton && !loading ? 'show-button' : '';
    const canHoverButton = hoverClass ? 'scale(1)' : 'scale(0)';
    const showTracksClass = tracksShowing ? 'show-tracks' : '';
    const videoPlayerSlideUpClass = playButtonClickedOnce ? '' : 'slide-up';
    const mediaControlsOpacity = status === 'play' ? '' : 'opaque';
    const loadingScreen = loading ? (
      <div className="loading-screen">
        <img
          src="https://apettigrew.imgix.net/static/kag-logo.png"
          alt="paperkag logo"
        />
      </div>
    ) : null;

    return (
      <div className={`container ${videoPlayerSlideUpClass}`}>
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
              src={videos[currVideo].src}
              type={videos[currVideo].type}
            />
          </video>
          <div className="play-controls">
            {status === 'pause' ? (
              <button
                aria-label="play button"
                className={`play center-button ${showPlayButtonClass}`}
                onClick={this.onPlayHandler}
              >
                <img src="/static/icons/video-player/play.svg" alt="play" />
              </button>
            ) : (
              <button
                aria-label="pause button"
                className={`play center-button ${showPlayButtonClass}`}
                onClick={this.onPauseHandler}
              >
                <img src="/static/icons/video-player/pause.svg" alt="pause" />
              </button>
            )}
          </div>
          <div className={`media-controls ${mediaControlsOpacity}`}>
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
            <TracksListButton
              onTrackListClickHandler={this.onTrackListClickHandler}
              tracksShowing={tracksShowing}
            />
          </div>
        </div>
        <TrackList
          videos={videos}
          currVideo={currVideo}
          onSelectTrackHandler={this.onSelectTrackHandler}
          showTracksClass={showTracksClass}
        />
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 0;
            margin-bottom: 6rem;
            position: relative;
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

          .media-controls {
            z-index: 100;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 30px;
            padding: 2px 2px 2px 1rem;
            position: absolute;
            right: 0;
            opacity: 0.35;
            bottom: 0;
            transition: opacity 300ms ease-out;
          }

          .media-controls.opaque {
            opacity: 1 !important;
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

          .slide-up {
            opacity: 0;
            animation: slide-up 300ms ease 1 forwards 800ms;
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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
              padding: 2px 2px 2px 2rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default VideoPlayer;
