const Banner = () => {
  return (
    <div className="banner grow-right">
      <a
        className="fade-in-right"
        href="https://www.vogue.it/photovogue/portfolio/?id=148007"
        target="_blank"
      >
        <img
          className="banner-img"
          src="/static/vogue-logo.jpg"
          alt="vogue logo"
        />
      </a>
      <div className="banner-content fade-in-right">
        <h1 className="banner-title">Vogue Italia</h1>
        <p className="banner-description">
          YO! Catch me in Vogue Italia. Photographer, Anastasia Bigdan, shot me
          for her{` `}
          <a
            href="https://www.vogue.it/photovogue/portfolio/?id=148007"
            target="_blank"
            rel="noreferrer"
          >
            portfolio
          </a>
          .
        </p>
      </div>
      <style jsx>{`
        .banner {
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: flex-start;
          padding: 0.8rem;
          margin-top: 0.5rem;
        }

        .banner-img {
          width: 5rem;
        }

        .banner-content {
          display: flex;
          flex-direction: column;
          padding-left: 15px;
        }

        .banner-title {
          margin: 0;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(250, 250, 250, 0.4);
        }
        .banner-description {
          margin: 3px 0 0 0;
          font-size: 0.875rem;
          font-weight: 200;
          color: rgba(250, 250, 250, 0.9);
          line-height: 1.3;
          letter-spacing: 0.5px;
        }

        .banner-description a {
          color: rgba(250, 250, 250, 0.4);
          text-decoration: none;
        }

        .banner-description a:hover,
        .banner-description a:focus {
          color: rgba(250, 250, 250, 0.8);
          text-decoration: underline;
        }

        .fade-in-right {
          opacity: 0;
          animation: fade-in-right 0.5s ease forwards 1.6s;
        }

        .grow-right {
          transform: scaleX(0);
          transform-origin: left;
          animation: grow-right 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)
            forwards 1s;
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translate(-15px);
          }

          to {
            opacity: 1;
            transform: translate(0px);
          }
        }
        @keyframes grow-right {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }
        @media (min-width: 600px) {
          .banner {
            padding: 1.25rem;
          }

          .banner-title {
            font-size: 1.5rem;
          }
          .banner-description {
            font-size: 1.1rem;
          }
        }
        @media (min-width: 900px) {
          .banner {
            padding: 1rem 3rem;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;
          }
        }

        @media (min-width: 1200px) {
          .banner {
            padding: 1rem 2rem;
          }
          .banner-img {
            width: 7rem;
          }
          .banner-content {
            margin-left: 2rem;
          }
          .banner-title {
            font-size: 2rem;
          }
          .banner-description {
            font-size: 1.35rem;
            padding-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
