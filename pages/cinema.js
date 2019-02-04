import HeadTag from '../components/head-tag/HeadTag';
import Header from '../components/header/Header';
import VideoPlayer from '../components/video-player/VideoPlayer';
import Bio from '../components/bio/Bio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import InfoWrapper from '../components/info-wrapper/InfoWrapper';

const videos = [
  {
    src: '/static/videos/mr-rag.mp4',
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

const cinema = () => {
  return (
    <div>
      <HeadTag />
      <Header />
      <main>
        <div className="wrapper">
          <VideoPlayer videos={videos} />
        </div>
      </main>
      <InfoWrapper>
        <Bio />
        <Contact />
        <Footer />
      </InfoWrapper>
      <style jsx>{`
        .wrapper {
          padding: 2rem 10px;
        }
      `}</style>
    </div>
  );
};

export default cinema;
