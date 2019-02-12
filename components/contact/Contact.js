const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <a href="tel:12069725004" className="social-link">
          <img
            src="/static/icons/phone-white.svg"
            alt="phone icon"
            className="phone-icon icon"
          />
          <span>206-972-5004</span>
        </a>
        <a href="mailto:paperkag@gmail.com?Subject=YO!" className="social-link">
          <img
            src="/static/icons/mail-white.svg"
            className="mail-icon icon"
            alt="email icon"
          />
          <span>paperkag@gmail.com</span>
        </a>
        <a
          href="https://www.instagram.com/mf.kag"
          rel="noreferrer"
          target="_blank"
          className="social-link"
        >
          <img
            src="/static/icons/insta-white.svg"
            alt="instagram icon"
            className="instagram-icon icon"
          />
          <span>mf.kag</span>
        </a>
      </div>
      <style jsx>{`
        .contact {
          box-sizing: border-box;
          width: 100%;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50%;
          margin: 0 auto;
        }

        .title {
          font-family: 'Baloo Thambi', 'Sans-Serif';
          font-size: 2rem;
          text-transform: uppercase;
          margin: 0 0 1rem 0;
        }
        .social-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 1rem;
          transition: opacity 100ms ease-in-out;
        }

        .social-link:hover,
        .social-link:active {
          opacity: 0.6;
        }

        .social-link:hover img {
          transform: rotate(90deg);
        }

        .social-link span {
          font-family: 'Baloo Thambi', 'Sans-Serif';
          color: rgba(250, 250, 250, 0.8);
          font-weight: 100;
        }
        .social-link .icon {
          height: 2.5rem;
          margin-right: 10px;
          transition: transform 200ms ease-in;
        }

        @media (min-width: 500px) {
          .contact-container {
            width: 30%;
          }
          @media (min-width: 700px) {
          .contact-container {
            flex-direction: row;
            width: 35rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
