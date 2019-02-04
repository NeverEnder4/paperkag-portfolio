const Footer = () => {
  const getYear = () => <span>{new Date().getFullYear()}</span>;

  return (
    <footer className="footer">
      <a href="#" className="logo-link">
        <div className="logo-text">
          <span className="brand-name">PAPERKAG</span>
          <span className="artist-name">
            &copy; {getYear()} Kenyatta Barnette
          </span>
        </div>
      </a>
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 2rem 0 1rem 0;
          display: flex;
          justify-content: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 10px;
        }

        .footer a {
          text-dcoration: none;
          color: rgba(250, 250, 250, 0.8);
        }

        .logo-link .logo-text {
          align-self: flex-start;
        }

        .logo-text {
          display: flex;
          flex-flow: column;
        }

        .logo-link .brand-name {
          font-size: 1.5rem;
          font-family: 'SEGA LOGO FONT';
          font-weight: 200;
        }

        .logo-link .artist-name {
          font-family: 'Baloo Thambi';
        }
        @media (min-width: 700px) {
          .footer {
            padding: 3rem 0 2rem 0;
          }

          .logo-link .brand-name {
            font-size: 3rem;
            font-family: 'SEGA LOGO FONT';
            font-weight: 200;
          }

          .logo-link .artist-name {
            font-family: 'Baloo Thambi';
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
