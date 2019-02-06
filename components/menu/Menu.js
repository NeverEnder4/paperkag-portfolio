import Link from 'next/link';

import './Menu.css';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <Link href="/art">
          <a>
            <li className="menu-item-container art">
              <span className="text">Art</span>
            </li>
          </a>
        </Link>
        <Link href="/cinema">
          <a>
            <li className="menu-item-container cinema">
              <span className="text">Cinema</span>
            </li>
          </a>
        </Link>
        <Link href="/modeling">
          <a>
            <li className="menu-item-container model">
              <span className="text">Modeling</span>
            </li>
          </a>
        </Link>

        <style jsx>{`
          .menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            margin-bottom: 6rem;
            margin-top: -4px;
          }
          .menu-item-container {
            backface-visibility: hidden;
            border: 2px solid #000000;
            height: 25vh;
            display: block;
            margin-bottom: 10px;
            position: relative;
            filter: grayscale(75%);
            transition: filter 300ms ease-out;
          }

          .menu a:hover .menu-item-container,
          .menu a:focus .menu-item-container {
            filter: grayscale(0%);
          }

          .menu-item-container.art {
            background-image: url('https://apettigrew.imgix.net/static/paintings.jpg');
            background-size: cover;
            background-position: center;
          }

          .menu-item-container.cinema {
            background-image: url('https://apettigrew.imgix.net/static/skating-2.jpeg');
            background-size: cover;
            background-position: 50% 80%;
          }

          .menu-item-container.model {
            background-image: url('https://apettigrew.imgix.net/static/kag-model.jpg');
            background-size: cover;
            background-position: 50% 15%;
          }

          .menu a {
            text-decoration: none;
          }

          .menu-item-container .text {
            font-size: 3rem;
            text-transform: uppercase;
            color: #ffffff;
            font-family: 'Baloo Thambi';
            position: absolute;
            right: 10px;
            bottom: 0%;
            text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
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
              backface-visibility: hidden;
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

            .menu a:hover .menu-item-container .text,
            .menu a:focus .menu-item-container .text {
              opacity: 1;
              visibility: visible;
            }

            .menu-item-container .text {
              display: inline-block;
              font-size: 5vw;
              text-transform: uppercase;
              color: #ffffff;
              font-family: 'Baloo Thambi';
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
