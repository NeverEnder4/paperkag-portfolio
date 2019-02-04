import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/" as="/">
        <a className="logo-link">
          <div className="logo-text">
            <span className="brand-name">PAPERKAG</span>
            <span className="artist-name">by Kenyatta Furious Barnette</span>
          </div>
          <img src="/static/kag-logo.png" />
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
          font-family: 'SEGA LOGO FONT';
          font-weight: 200;
        }

        .logo-link .artist-name {
          font-family: 'Baloo Thambi';
          color: #333333;
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
            font-family: 'SEGA LOGO FONT';
            font-weight: 200;
          }

          .logo-link .artist-name {
            font-family: 'Baloo Thambi';
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
        }
      `}</style>
    </header>
  );
};

export default Header;
