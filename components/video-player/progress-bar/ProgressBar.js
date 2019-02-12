class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { duration, currentTime, onProgressBarChangeHandler } = this.props;

    const formatSeconds = seconds => {
      const min = Math.floor(seconds / 60);
      let sec = Math.floor(seconds % 60);
      if (sec < 10) sec = '0' + sec;
      const formatted = `${min}:${sec}`;
      return formatted;
    };

    return (
      <div className="progress-bar">
        <div className="timer">
          <span>{formatSeconds(currentTime)}</span>
          <span>/</span>
          <span>{formatSeconds(duration)}</span>
        </div>

        <input
          className="progress-bar"
          ref={element => (this.sliderElementRef = element)}
          min="0"
          max={duration}
          value={currentTime}
          type="range"
          onChange={onProgressBarChangeHandler}
          aria-label="media player progress bar"
        />
        <style jsx>{`
          .progress-bar {
            display: flex;
            align-items: center;
            color: rgba(250, 250, 250, 0.8);
            margin-left: 10px;
            font-size: 0.8rem;
            font-family: 'Baloo Thambi', 'Sans-Serif';
          }
          .timer {
            display: flex;
            align-items: center;
            letter-spacing: 1px;
          }

          input[type='range'] {
            -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
            width: 100%; /* Specific width is required for Firefox. */
            background: transparent; /* Otherwise white in Chrome */
            margin-left: 5px;
            flex: 1;
          }

          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
          }

          input[type='range']:focus {
            outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
          }

          input[type='range']::-ms-track {
            width: 100%;
            cursor: pointer;
            flex: 1;

            /* Hides the slider so custom styles can be added */
            background: transparent;
            border-color: transparent;
            color: transparent;
          }

          /* Style the thumb */

          /* Special styling for WebKit/Blink */
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            border: none;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            margin-top: -2px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
          }

          /* All the same stuff for Firefox */
          input[type='range']::-moz-range-thumb {
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: none;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
          }

          /* All the same stuff for IE */
          input[type='range']::-ms-thumb {
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            border: none;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
          }

          /* Style the track */
          input[type='range']::-webkit-slider-runnable-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            background: rgba(250, 250, 250, 0.8);
            border-radius: 1.3px;
            border: none;
          }

          input[type='range']:focus::-webkit-slider-runnable-track {
            background: rgba(250, 250, 250, 0.8);
          }

          input[type='range']::-moz-range-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
            background: rgba(250, 250, 250, 0.8);
            border-radius: 1.3px;
            border: none;
          }

          input[type='range']::-ms-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            background: transparent;
            border-color: transparent;
            border-width: 16px 0;
            color: transparent;
          }
          input[type='range']::-ms-fill-lower {
            background: rgba(250, 250, 250, 0.8);
            border: none;
            border-radius: 2.6px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          }
          input[type='range']:focus::-ms-fill-lower {
            background: rgba(250, 250, 250, 0.8);
          }
          input[type='range']::-ms-fill-upper {
            background: rgba(250, 250, 250, 0.8);
            border: none;
            border-radius: 2.6px;
            box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
          }
          input[type='range']:focus::-ms-fill-upper {
            background: rgba(250, 250, 250, 0.8);
          }

          @media (min-width: 500px) {
            .progress-bar {
              margin-left: 5px;
            }
            input[type='range'] {
              width: 18rem;
            }
          }
          @media (min-width: 700px) {
            .progress-bar {
              margin-left: 5px;
            }
            input[type='range'] {
              width: 25rem;
            }
          }

          @media (min-width: 800px) {
            input[type='range'] {
              width: 35rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ProgressBar;
