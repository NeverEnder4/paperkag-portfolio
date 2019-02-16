import Link from 'next/link';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return (
      <div>
        <div className="error flex-center">
          <div className="logo-container flex-center">
            <img
              src="https://apettigrew.imgix.net/static/kag-logo.png?w=300&format=compress"
              alt="kag logo"
              className="logo"
            />
          </div>
          <div className="content-container flex-center">
            <div>
              <h1 className="status">Error {this.props.statusCode}</h1>

              <h2 className="message">
                Yo! Something went terribly wrong. Where would you like to go?
              </h2>
            </div>

            <nav className="nav">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/art" passHref>
                    <a>Art</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cinema" passHref>
                    <a>Cinema</a>
                  </Link>
                </li>
                <li>
                  <Link href="/modeling" passHref>
                    <a>Modeling</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <style jsx>{`
            .error {
              color: rgba(255, 255, 255, 0.8);
              font-family: 'Baloo Thambi', 'Sans-Serif';
              height: 100vh;
              letter-spacing: 2px;
              font-weight: 200;
            }

            .flex-center {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .logo-container {
              padding: 3rem 0;
              height: 40vh;
            }

            .content-container {
              background-color: #1d1d1d;
              width: 100%;
              height: 60vh;
              padding: 0 1rem;
              box-sizing: border-box;
              text-align: center;
              justify-content: space-around;
            }

            .logo {
              filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.7));
              animation: float 5s infinite ease-in-out;
              width: 8rem;
            }

            .message {
              margin-top: 0;
              margin-bottom: 0;

              font-size: 1rem;
            }

            .status {
              margin: 0;
            }

            .nav ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              text-transform: uppercase;
            }

            .nav li {
              margin: 0 0.2rem;
            }

            .nav li a {
              text-decoration: none;
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.8);
              transition: all 100ms ease-out;
              padding: 0.1rem 0rem;
              position: relative;
            }

            .nav li a::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-bottom: 1px solid transparent;
              transform: scaleY(0);
              transform-origin: 50% 0%;
              transition: all 200ms ease-out;
            }

            .nav li a:hover,
            .nav li a:focus {
              color: #fff;
            }

            .nav li a:hover::after,
            .nav li a:hover::before {
              transform: scaleY(1);
              border-bottom: 1px solid #fff;
            }

            @keyframes float {
              0% {
                transform: translatey(0px);
              }
              50% {
                transform: translatey(-20px);
              }
              100% {
                transform: translatey(0px);
              }
            }

            @media (min-width: 600px) {
              .status {
                font-size: 3.25rem;
              }
              .message {
                font-size: 2rem;
                max-width: 600px;
              }

              .nav li {
                margin: 0 0.4rem;
              }

              .nav li a {
                font-size: 1.875rem;
                padding: 0.2rem 0rem;
              }
            }

            .content-container {
              min-height: 40vh;
            }

            @media (min-width: 1025px) {
              .logo {
                width: 10rem;
              }
            }
          `}</style>
          <style jsx global>
            {`
              body {
                padding: 0;
                margin: 0;
              }
            `}
          </style>
        </div>
      </div>
    );
  }
}

export default Error;
