const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img" src="/static/vogue-logo.jpg" />
      <div className="banner-content">
        <h1 className="banner-title">Vogue Italia</h1>
        <p className="banner-description">
          Vogue Italia photographer Anastasia Bigdan stopped me in Seattle and
          snapped some photos for her{` `}
          <a
            href="https://www.vogue.it/photovogue/portfolio/?id=148007"
            target="_blank"
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
          padding: 1rem;
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
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
