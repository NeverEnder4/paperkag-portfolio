const Bio = () => {
  return (
    <article className="bio slide-in">
      <div className="bio-content">
        <img
          src="https://apettigrew.imgix.net/static/street-art-4.jpeg?w=300&format=compress"
          className="avatar "
          alt="avatar"
        />
        <h1 className="name">Kenyatta Barnette</h1>
        <h2 className="location">Los Angeles</h2>
        <p className="center ph3">
          Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci.
          Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora,
          fuga harum corporis non blanditiis fugiat voluptates! Nostrum?
        </p>
        <p className="center ph3">
          Lorem ipsum dolor sit amet consectetur ading elit. Unde, totam asci.
          Facilis voluptas porro eos lium enim nihil impedit dicta odit tempora,
          fuga harum corporis non blanditiis fugiat voluptates! Nostrum?
        </p>
      </div>
      <style jsx>{`
        .bio {
          padding: 2rem 0;
        }

        .bio-content {
          text-align: center;
        }

        .bio .name {
          font-size: 1.25rem;
        }

        .bio .location {
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          font-weight: 200;
          text-transform: uppercase;
        }

        .bio p {
          max-width: 30em;
          font-size: 0.875rem;
          line-height: 1.4;
          margin: 1rem auto;
          padding: 0 1rem;
          letter-spacing: 0.3px;
        }

        .avatar {
          border-radius: 8px;
          width: 75px;
        }

        .slide-in {
          opacity: 0;
          animation: slide-in 0.3s ease forwards 1.3s;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 700px) {
          .bio {
            padding: 4rem 0;
          }

          .bio .name {
            font-size: 1.45rem;
          }

          .bio .location {
            font-size: 1rem;
          }
          .bio p {
            max-width: 40em;
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }

          .avatar {
            width: 120px;
          }
        }

        @media (min-width: 1440px) {
          .avatar {
            width: 200px;
          }
        }
      `}</style>
    </article>
  );
};

export default Bio;
