import NavHeader from '../components/nav-header/NavHeader';
import VideoPlayer from '../components/video-player/VideoPlayer';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';
import PageWrapper from '../components/page-wrapper/PageWrapper';

import 'normalize.css';

const videos = [
  {
    src: '/static/videos/yo!-skate-opt.mp4',
    type: 'video/mp4',
    title: 'YO! MAN',
    artist: 'Kenyatta Barnette',
    genre: 'Skate',
  },
  {
    src: '/static/videos/yo-ep1-opt.mp4',
    type: 'video/mp4',
    title: 'YO! Episode 1',
    artist: 'Kenyatta Barnette',
    genre: 'Animation',
  },
];

const pageList = [
  { name: 'art', path: '/art' },
  { name: 'cinema', path: '/cinema' },
  { name: 'modeling', path: '/modeling' },
];

const cinema = ({ currPage }) => {
  return (
    <PageWrapper>
      <NavHeader pageList={pageList} currPage={currPage} />
      <main>
        <div className="content-wrapper">
          <VideoPlayer videos={videos} />
        </div>
      </main>
      <InfoWrapper>
        <Bio />
        <Contact />
        <Footer />
        <style jsx>{`
          .content-wrapper {
            padding: 0 10px 2rem 10px;
          }
        `}</style>
        <style jsx global>{`
          body {
            background-color: #ffffff;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23CCC' stroke-width='0' %3E%3Crect fill='%23F5F5F5' x='-60' y='-60' width='110' height='240'/%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>
      </InfoWrapper>
    </PageWrapper>
  );
};

cinema.getInitialProps = ({ pathname }) => {
  return { currPage: pathname };
};

export default cinema;
