const TrackList = ({
  videos,
  currVideo,
  onSelectTrackHandler,
  showTracksClass,
}) => (
  <ul className={`track-list ${showTracksClass}`}>
    {videos.map((video, index) => {
      let selectedTrackClass = '';
      if (video.src === videos[currVideo].src) {
        selectedTrackClass = 'selected-track';
      } else {
        selectedTrackClass = '';
      }
      return (
        <li
          onClick={() => onSelectTrackHandler(index)}
          key={video.title}
          className={`track ${selectedTrackClass} track-${index}`}
        >
          <span className="title">{video.title}</span>
        </li>
      );
    })}
    <style jsx>{`
      .track-list {
        position: relative;
        z-index: 0;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        color: rgba(250, 250, 250, 0.8);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 50ms ease-out;
      }

      .track-list.show-tracks {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .track {
        display: flex;
        font-size: 0.875rem;
        border-top: 1px solid #fff;
        background-color: #1d1d1d;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);

        cursor: pointer;
        font-family: 'Baloo Thambi', 'Sans-Serif';
        text-align: center;
        transform-origin: 100% 50%;
        transform: scaleX(0);
        opacity: 0;
      }

      .track-0.track {
        transition: opacity 50ms 50ms ease-out, transform 150ms 50ms ease-out;
      }

      .track-1.track {
        transition: opacity 50ms 150ms ease-out, transform 150ms 150ms ease-out;
      }

      .show-tracks .track {
        transform: scaleX(1);
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
        padding: 0.6rem 0.8rem;
        width: 100%;
        letter-spacing: 1px;
        font-size: 1rem;
      }

      @media (min-width: 600px) {
        .track {
          font-size: 1.25rem;
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
  </ul>
);

export default TrackList;
