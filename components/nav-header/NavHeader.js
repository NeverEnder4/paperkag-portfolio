import SmallNav from './small-nav/SmallNav';
import Header from './header/Header';
import HeadTag from './head-tag/HeadTag';

const NavHeader = ({ pageList, currPage, homePage }) => {
  return (
    <div className="nav-header">
      <HeadTag />
      <Header homePage={homePage} />
      <SmallNav pages={pageList} currPage={currPage} />
      <style jsx>{`
        .nav-header {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 1025px) {
          .nav-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px 1rem 10px;
            max-width: 1200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default NavHeader;
