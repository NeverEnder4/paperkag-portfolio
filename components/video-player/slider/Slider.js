class Slider extends React.Component {
  constructor() {
    super();
    this.sliderElementRef = null;
    this.state = {
      sliderElement: null,
    };
  }

  componentDidMount() {
    this.setState({ sliderElement: this.sliderElementRef });
  }

  render() {
    let slider = this.state.sliderElement;
    const { defaultVal, onSliderChange, muted, onMuteHandler } = this.props;
    return (
      <div className="slider">
        <button
          onClick={onMuteHandler}
          className="small-button"
          aria-label="mute"
        >
          {muted ? (
            <img src="/static/icons/video-player/mute.svg" alt="mute" />
          ) : (
            <img src="/static/icons/video-player/unmute.svg" alt="unmute" />
          )}
        </button>
        <input
          className="range"
          ref={element => (this.sliderElementRef = element)}
          min="0"
          max="100"
          defaultValue={defaultVal}
          type="range"
          onChange={() => {
            onSliderChange(slider);
          }}
          aria-label="volume slider"
        />
        <style jsx>{`
          .slider {
            display: flex;
            align-items: center;
          }

          .small-button {
            width: 2.5rem;
          }

          .slider:hover input[type='range'],
          .slider:focus input[type='range'] {
            width: 50px;
            opacity: 1;
            visibility: visible;
          }

          .small-button img {
            width: 100%;
          }
          input[type='range'] {
            -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
            width: 0px; /* Specific width is required for Firefox. */
            background: transparent; /* Otherwise white in Chrome */
            opacity: 0;
            visibility: hidden;

            transition: all 100ms ease-out;
          }

          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
          }

          input[type='range']:focus {
            outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
          }

          input[type='range']::-ms-track {
            width: 50px;
            cursor: pointer;

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

          @media (min-width: 1000px) {
            input[type='range'] {
              width: 5rem;
            }

            .slider:hover input[type='range'],
            .slider:focus input[type='range'] {
              width: 8rem;
              opacity: 1;
              visibility: visible;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Slider;
