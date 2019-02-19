import Link from 'next/link';

import { logEvent } from '../../static/utils/analytics';

const analyzeMenuClickHandler = e => {
  logEvent(
    'Navigation',
    'From Home Page',
    `To ${e.currentTarget.dataset['route']}`,
    1,
  );
};

const Menu = () => {
  return (
    <nav>
      <ul className="menu slide-up">
        <li
          onClick={analyzeMenuClickHandler}
          data-route="/art"
          className="menu-item-container art"
        >
          <Link prefetch href="/art">
            <a >
              <span  className="text">Art</span>
            </a>
          </Link>
        </li>
        <li
          onClick={analyzeMenuClickHandler}
          data-route="/cinema"
          className="menu-item-container cinema"
        >
          <Link prefetch href="/cinema">
            <a>
              <span className="text">Cinema</span>
            </a>
          </Link>
        </li>
        <li
          onClick={analyzeMenuClickHandler}
          data-route="/modeling"
          className="menu-item-container model"
        >
          <Link prefetch href="/modeling">
            <a>
              <span className="text">Modeling</span>
            </a>
          </Link>
        </li>

        <style jsx>{`
          .menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            margin-bottom: 6rem;
            margin-top: 3px;
          }
          .menu-item-container {
            backface-visibility: hidden;
            border: 2px solid #000000;
            height: 20vh;
            max-height: 30vh;
            display: block;
            margin-bottom: 10px;
            position: relative;
            filter: grayscale(75%);
            transition: filter 300ms ease-out;
            cursor: pointer;
          }

          .menu li:hover,
          .menu li:focus {
            filter: grayscale(0%);
          }

          .menu-item-container.art {
            background-image: url('https://apettigrew.imgix.net/static/paintings.jpg?auto=format&q=35&w=1000');
            background-size: cover;
            background-position: center;
          }

          .menu-item-container.cinema {
            background-image: url('https://apettigrew.imgix.net/static/skating-2.jpeg?auto=format&q=35&w=1000');
            background-size: cover;
            background-position: 50% 80%;
          }

          .menu-item-container.model {
            background-image: url('https://apettigrew.imgix.net/static/kag-model.jpg?auto=format&q=35&w=1000');
            background-size: cover;
            background-position: 50% 15%;
          }

          .menu-item-container .text {
            font-size: 3rem;
            text-transform: uppercase;
            color: #ffffff;
            font-family: 'Baloo Thambi', 'Sans-Serif';
            position: absolute;
            right: 10px;
            bottom: 0%;
            text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
          }

          .slide-up {
            opacity: 0;
            animation: slide-up 0.4s ease forwards 1s;
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (min-width: 1025px) {
            .menu {
              flex-direction: row;
              justify-content: space-between;
              padding: 5vh 10px;
              box-sizing: border-box;
              margin-top: -20px;
            }

            .menu-item-container {
              box-sizing: border-box;
              backface-visibility: hidden;
              margin: 0 2px;
              text-align: center;
              border: 2px solid #000000;
              width: 32vw;
              height: 75vh;
              display: block;
              margin-bottom: 10px;
              position: static;
              filter: grayscale(75%);
              transition: filter 100ms ease-out;
            }

            .menu li:hover .text,
            .menu li:focus .text {
              opacity: 1;
              visibility: visible;
            }

            .menu-item-container .text {
              display: inline-block;
              font-size: 5vw;
              text-transform: uppercase;
              color: #ffffff;
              font-family: 'Baloo Thambi', 'Sans-Serif';
              position: static;
              text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
              opacity: 0;
              visibility: hidden;
              transform: translate(0, 200%);

              transition: all 200ms ease-out;
            }
          }
        `}</style>
      </ul>
    </nav>
  );
};

export default Menu;
