const InfoWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <div className="info-wrapper grow-up">
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

        .grow-up {
          transform: scaleY(0);
          transform-origin: center;
          animation: grow-up 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)
            forwards 0.8s;
        }

        @keyframes grow-up {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
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
            top: 11.5vh;
          }

          .content {
            margin-bottom: -2.5rem;
            transform: translateY(-15%);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default InfoWrapper;
