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
    const { defaultVal, onSliderChange } = this.props;
    return (
      <React.Fragment>
        <input
          className="slider"
          orient="vertical"
          ref={element => (this.sliderElementRef = element)}
          min="0"
          max="100"
          defaultValue={defaultVal}
          type="range"
          onChange={() => {
            onSliderChange(slider);
          }}
          aria-label="media player slider"
        />
        <style jsx>{`
          /*Remove default styles*/
          input[type='range'] {
            -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
            width: 100%; /* Specific width is required for Firefox. */
            background: transparent; /* Otherwise white in Chrome */
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

            /* Hides the slider so custom styles can be added */
            background: transparent;
            border-color: transparent;
            color: transparent;
          }

          input[type='range'] {
            transform-origin: 50% 50%;
            transform: rotate(-90deg);
          }

          /*Style thumb*/
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 14px;
            width: 6px;
            border-radius: 20%;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
            background: #ffff00;
            cursor: pointer;
            margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
            transition: opacity 300ms ease-out;
          }

          input[type='range']:hover::-webkit-slider-thumb {
            -webkit-appearance: none;
            opacity: 1;
          }

          input[type='range']::-webkit-slider-runnable-track {
            width: 100%;
            height: 5px;
            cursor: pointer;
            background: #ffffff;
            opacity: 0.8;

            transition: opacity 300ms ease-out;
          }
          input[type='range']:hover::-webkit-slider-runnable-track {
            opacity: 1;
          }
          input[type='range']:focus::-webkit-slider-runnable-track {
            opacity: 1;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Slider;
