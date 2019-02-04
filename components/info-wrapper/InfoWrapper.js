const InfoWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <div className="top-slant" />
      <div className="info-wrapper">
        <div className="content">{children}</div>
      </div>
      <style jsx>{`
        .info-wrapper {
          background-color: #1d1d1d;
          color: rgba(250, 250, 250, 0.8);
          margin-top: 10vh;
          position: relative;
          top: 12vh;
        }

        .info-wrapper::after {
          content: '';
          left: -5%;
          top: -15%;
          width: 130vw;
          height: 50%;
          background-color: #1d1d1d;
          position: absolute;
          z-index: -1;
          transform: rotate(-7deg);
          outline: 1px solid transparent;
        }
        .info-wrapper::before {
          content: '';
          right: -5%;
          top: -15%;
          width: 130vw;
          height: 50%;
          background-color: #1d1d1d;
          position: absolute;
          z-index: -1;
          transform: rotate(7deg);
          outline: 1px solid transparent;
        }

        .content {
          transform: translateY(-15%);
          margin-bottom: 1vh;
        }
        @media (min-width: 1200px) {
          .info-wrapper::after {
            transform: rotate(-5deg);
          }
          .info-wrapper::before {
            transform: rotate(5deg);
          }

          .info-wrapper {
            margin-top: 25vh;
            top: -2vh;
          }

          .content {
            margin-bottom: -4rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default InfoWrapper;
