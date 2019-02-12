import Link from 'next/link';

const SmallNav = ({ currPage, pages }) => {
  return (
    <nav>
      <ul className="small-nav">
        {pages.map((page, index) => {
          const currPageClass = page.path === currPage ? 'current-page' : '';
          const divider =
            index < pages.length - 1 ? <li className="nav-item">|</li> : null;
          return (
            <React.Fragment key={page.name}>
              <Link prefetch href={page.path}>
                <li className={`nav-item ${currPageClass}`}>{page.name}</li>
              </Link>
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
            margin: 0 auto;
          }

          .small-nav li {
            text-decoration: none;
            text-transform: uppercase;
            transition: opacity 100ms ease-out;
            cursor: pointer;
          }

          .nav-item {
            font-family: 'Baloo Thambi', 'Sans-Serif';
            font-size: 1.25rem;
            color: #1d1d1d;
          }

          .small-nav li:hover,
          .small-nav li:focus {
            opacity: 0.5;
          }

          .nav-item.current-page {
            opacity: 0.5;
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
