import { logEvent } from '../../static/utils/analytics';

const analyzeContactLinkClickHandler = e => {
  logEvent('Link Click', 'Contact', e.target.dataset['type'], 1);
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <a
          onClick={analyzeContactLinkClickHandler}
          data-type="Phone"
          href="tel:12069725004"
          className="social-link"
        >
          <img
            data-type="Phone"
            src="/static/icons/phone-white.svg"
            alt="phone icon"
            className="phone-icon icon"
          />
          <span data-type="Phone">206-972-5004</span>
        </a>
        <a
          onClick={analyzeContactLinkClickHandler}
          data-type="Email"
          href="mailto:paperkag@gmail.com?Subject=YO!"
          className="social-link"
        >
          <img
            data-type="Email"
            src="/static/icons/mail-white.svg"
            className="mail-icon icon"
            alt="email icon"
          />
          <span data-type="Email">paperkag@gmail.com</span>
        </a>
        <a
          onClick={analyzeContactLinkClickHandler}
          data-type="Instagram"
          href="https://www.instagram.com/mf.kag"
          rel="noreferrer"
          target="_blank"
          className="social-link"
        >
          <img
            data-type="Instagram"
            src="/static/icons/insta-white.svg"
            alt="instagram icon"
            className="instagram-icon icon"
          />
          <span data-type="Instagram">mf.kag</span>
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
        }

        .social-link:hover span,
        .social-link:active span{
          color: #ffff00;
        }

        .social-link:hover img {
          transform: rotate(90deg);
        }

       

        .social-link span {
          font-family: 'Baloo Thambi', 'Sans-Serif';
          color: rgba(250, 250, 250, 0.8);
          font-weight: 100;
          transition: all 100ms ease-in-out;

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
