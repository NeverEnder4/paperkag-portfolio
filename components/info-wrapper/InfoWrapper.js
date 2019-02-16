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
          margin-top: 5vh;
          position: relative;
          top: 0;
        }

        .content {
          transform: translateY(-9%);
          margin-bottom: -4rem;
        }
        @media (min-width: 700px) {
          .content {
            transform: translateY(-13%);
            margin-top: 10vh;
            margin-bottom: -6rem;
          }
        }
        @media (min-width: 1025px) {
          .content {
            transform: translateY(-14%);
          }
        }
        @media (min-width: 1200px) {
          .info-wrapper {
            top: 7vh;
          }

          .content {
            margin-bottom: -4rem;
            transform: translateY(-15%);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default InfoWrapper;
