import Link from 'next/link';

const SmallNav = ({ currPage, pages }) => {
  return (
    <nav>
      <ul className="small-nav slide-in-right">
        {pages.map((page, index) => {
          const currPageClass = page.path === currPage ? 'current-page' : '';
          const divider =
            index < pages.length - 1 ? <li className="nav-item">|</li> : null;
          return (
            <React.Fragment key={page.name}>
              <li className={`${currPageClass}`}>
                <Link prefetch href={page.path}>
                  <a className="nav-item link "> {page.name}</a>
                </Link>
              </li>

              {divider}
            </React.Fragment>
          );
        })}

        <style jsx>{`
          .small-nav {
            list-style-type: none;
            padding: 0.5rem 0 1rem 0;
            display: flex;
            justify-content: space-around;
            width: 75vw;
            margin: 0.7rem auto;
          }

          .small-nav a {
            text-decoration: none;
            text-transform: uppercase;
            transition: opacity 100ms ease-out;
          }

          .nav-item {
            font-family: 'Baloo Thambi', 'Sans-Serif';
            font-size: 1.25rem;
            color: #1d1d1d;
          }

          .small-nav a:hover,
          .small-nav a:focus {
            opacity: 0.5;
          }

          .current-page .nav-item {
            opacity: 0.5;
          }

          .slide-in-right {
            opacity: 0;
            animation: slide-in-right 0.4s ease forwards 1.2s;
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(-15px);
            }

            to {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          @media (min-width: 600px) {
            .nav-item {
              font-size: 2.3rem;
            }
          }

          @media (min-width: 1025px) {
            .small-nav {
              width: 100%;
              flex: 1;
              margin: 0 auto;
            }
            .nav-item {
              font-size: 2.3rem;
            }
          }
        `}</style>
      </ul>
    </nav>
  );
};

export default SmallNav;
