const TrackListButton = ({ onTrackListClickHandler, tracksShowing }) => {
  const slideDownClass = tracksShowing ? 'animate' : '';
  return (
    <button
      aria-label="show videos"
      onClick={onTrackListClickHandler}
      className="tracks-list-button"
    >
      <svg
        width="56.693"
        height="56.693"
        viewBox="0 0 56.693 56.693"
        xmlns="http://www.w3.org/2000/svg"
        transform="scale(0.45)"
        preserveAspectRatio="xMidYMin slice"
      >
        <g>
          <title>background</title>
          <rect
            fill="none"
            id="canvas_background"
            height="56.693"
            width="56.693"
            y="0"
            x="0"
          />
        </g>
        <g>
          <title>Layer 1</title>
          <path
            fillOpacity="0.8"
            id="line-bottom"
            className={`line-bottom ${slideDownClass}`}
            fill="#ffffff"
            d="m47.604,40.265l-25.008,0c-0.947,0 -1.716,0.77 -1.716,1.717s0.769,1.715 1.716,1.715l25.008,0c0.947,0 1.716,-0.768 1.716,-1.715s-0.769,-1.717 -1.716,-1.717z"
          />
          <path
            fillOpacity="0.8"
            id="line-middle"
            className={`line-middle ${slideDownClass}`}
            fill="#ffffff"
            d="m47.604,26.95l-25.008,0c-0.947,0 -1.716,0.768 -1.716,1.716c0,0.949 0.769,1.714 1.716,1.714l25.008,0c0.947,0 1.716,-0.766 1.716,-1.714c-0.001,-0.949 -0.769,-1.716 -1.716,-1.716z"
          />
          <path
            fillOpacity="0.8"
            id="line-top"
            className={`line-top ${slideDownClass}`}
            fill="#ffffff"
            d="m22.596,17.065l25.008,0c0.947,0 1.716,-0.768 1.716,-1.715c0,-0.948 -0.769,-1.717 -1.716,-1.717l-25.008,0c-0.947,0 -1.716,0.769 -1.716,1.717c0,0.947 0.768,1.715 1.716,1.715z"
          />
          <path
            fillOpacity="0.8"
            id="dot-top"
            className={`dot top ${slideDownClass}`}
            fill="#ffffff"
            d="m14.551,11.506l-4.254,0c-0.948,0 -1.717,0.768 -1.717,1.715l0,4.256c0,0.947 0.769,1.717 1.717,1.717l4.254,0c0.948,0 1.717,-0.77 1.717,-1.717l0,-4.256c0,-0.947 -0.769,-1.715 -1.717,-1.715z"
          />
          <path
            fillOpacity="0.8"
            id="dot-middle"
            className={`dot middle ${slideDownClass}`}
            fill="#ffffff"
            d="m14.551,24.821l-4.254,0c-0.948,0 -1.717,0.77 -1.717,1.718l0,4.255c0,0.947 0.769,1.715 1.717,1.715l4.254,0c0.948,0 1.717,-0.768 1.717,-1.715l0,-4.255c0,-0.949 -0.769,-1.718 -1.717,-1.718z"
          />
          <path
            fillOpacity="0.8"
            id="dot-bottom"
            className={`dot bottom ${slideDownClass}`}
            fill="#ffffff"
            d="m14.551,38.138l-4.254,0c-0.948,0 -1.717,0.768 -1.717,1.715l0,4.256c0,0.947 0.769,1.715 1.717,1.715l4.254,0c0.948,0 1.717,-0.768 1.717,-1.715l0,-4.256c0,-0.948 -0.769,-1.715 -1.717,-1.715z"
          />
        </g>
      </svg>
      <span>VIDEOS</span>
      <style jsx>{`
        svg {
          boder-top: 2px solid #fff;
          boder-bottom: 2px solid #fff;
        }

        .tracks-list-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tracks-list-button span {
          font-family: 'Baloo Thambi', 'Sans Serif';
          font-size: 1rem;
          color: #ffffff;
        }

        .line-top,
        .line-bottom {
          transform: translate(0, 0);
          transform-origin: center;
          transition: all 0.2s cubic-bezier(0.44, 0.27, 0.51, 1);
        }

        .line-top.animate {
          transform: translateY(5px);
        }

        .line-bottom.animate {
          transform: translateY(-5px);
        }

        .line-middle {
          transform: scaleY(1);
          transform-origin: center;
          transition: all 0.2s cubic-bezier(0.44, 0.27, 0.51, 1);
        }

        .line-middle.animate {
          transform: scaleX(0);
        }

        .dot {
          transform: translateX(0);
          opacity: 1;
          transition: all 0.2s ease;
        }

        .dot.middle {
          transition-delay: 75ms;
        }

        .dot.top {
          transition-delay: 150ms;
        }

        .dot.animate {
          transform: translateY(15px);
          opacity: 0;
        }
        @media (min-width: 1200px) {
          .tracks-list-button {
            transform: translateX(-1.2vw);
          }
        }
      `}</style>
    </button>
  );
};

export default TrackListButton;
