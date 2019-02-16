import Link from 'next/link';

const Header = ({ homePage }) => {
  const animateLogoClass = homePage ? 'enter-float' : 'float';
  return (
    <header className="header">
      <Link href="/" as="/">
        <a className="logo-link">
          <div className="logo-text">
            <span className="brand-name">PAPERKAG</span>
            <span className="artist-name">by Kenyatta Furious Barnette</span>
          </div>
          <img
            className={`${animateLogoClass}`}
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

        .enter-float {
          animation: enter 2s ease-out forwards,
            float 5s infinite 2s ease-in-out;
        }

        .float {
          animation: float 5s infinite ease-in-out;
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
