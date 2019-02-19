import Link from 'next/link';

import { logEvent } from '../../../static/utils/analytics';

const analyzeMenuClickHandler = e => {
  if (window.location.pathname !== e.currentTarget.dataset['route']) {
    logEvent(
      'Navigation',
      `From ${window.location.pathname}`,
      `To ${e.currentTarget.dataset['route']}`,
      1,
    );
  }
};

const Header = () => {
  return (
    <header className="header">
      <Link href="/" as="/">
        <a
          data-route="/"
          onClick={analyzeMenuClickHandler}
          className="logo-link"
        >
          <div className="logo-text">
            <span className="brand-name fade-in-right">PAPERKAG</span>
            <span className="artist-name grow-left">
              by Kenyatta Furious Barnette
            </span>
          </div>
          <img
            className="fade-in-right delay"
            src="https://apettigrew.imgix.net/static/kag-logo.png?w=100&format=compress"
            alt="PaperKag Logo"
          />
        </a>
      </Link>

      <style jsx>{`
        .header {
          width: 100%;
          padding-top: 10px;
          display: flex;
          justify-content: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 10px;
        }

        .header a {
          text-dcoration: none;
        }

        .logo-link img {
          height: 5rem;
          filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.7));
          backface-visibility: hidden;
        }

        .float {
          animation: float 4s infinite 1.4s ease-in-out;
        }

        .grow-left {
          transform: scaleY(0);
          transform-origin: right;
          animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s
            forwards;
          animation-delay: 0.4s;
        }

        .fade-in-right {
          opacity: 0;
          animation: fade-in-right ease 0.4s forwards;
        }

        .fade-in-right.delay {
          animation-delay: 0.8s;
        }

        .logo-link .logo-text {
          align-self: flex-start;
        }

        .logo-text {
          display: flex;
          flex-flow: column;
        }

        .logo-link .brand-name {
          font-size: 2.4rem;
          color: #1d1d1d;
          font-family: 'SEGA LOGO FONT', 'Sans-Serif';
          font-weight: 200;
        }

        .logo-link .artist-name {
          font-family: 'Baloo Thambi', 'Sans-Serif';
          color: #333333;
        }

        @keyframes enter {
          0% {
            transform: translateX(-100vw) rotate(0deg);
          }

          100% {
            transform: translateX(0vw) rotate(360deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes grow-left {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1024px) {
          .logo-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0 10px;
          }
          .logo-text {
            display: flex;
            flex-flow: column;
            align-items: center;
          }

          .logo-link .brand-name {
            font-size: 5rem;
            color: #1d1d1d;
            font-family: 'SEGA LOGO FONT', 'Sans-Serif';
            font-weight: 200;
          }

          .logo-link .artist-name {
            font-family: 'Baloo Thambi', 'Sans-Serif';
            color: #333333;
            font-size: 1.2rem;
          }

          .logo-link img {
            height: 6rem;
          }
          @media (min-width: 1025px) {
            .header {
              justify-content: flex-start;
            }
          }
          @keyframes enter {
            0% {
              transform: translateX(-60vw) rotate(0deg);
            }

            100% {
              transform: translateX(0vw) rotate(360deg);
            }
          }
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        }
        @font-face {
          font-display: swap;
          font-family: 'SEGA LOGO FONT';
          font-style: normal;
          font-weight: normal;
          src: local('SEGA LOGO FONT'), url('./SEGA.woff') format('woff');
        }
      `}</style>
    </header>
  );
};

export default Header;
