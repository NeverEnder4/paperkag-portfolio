const Modal = ({ onModalClick, displayed, imgSrc, imgAlt }) => {
  const showModalClass = displayed ? 'show-modal' : '';
  const preventLinkDefault = e => {
    e.preventDefault();
  };
  return (
    <div onClick={onModalClick} className={`modal ${showModalClass}`}>
      <div className="img-container">
        <a className="close-link" href="#" onClick={preventLinkDefault}>
          <img src="/static/icons/close.svg" alt="close modal" />
        </a>
        <img src={imgSrc} alt={imgAlt} className="modal-img" />
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          overflow-y: auto;
          transform: translateX(-200%);
          transform-origin: 0% 50%;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 300;
          transition: all 300ms ease-out;
        }

        .modal.show-modal {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
        }

        .img-container {
          position: relative;
        }

        .close-link {
          position: absolute;
          right: 15px;
          top: 15px;
          width: 1.2rem;
        }

        .close-link img {
          width: 100%;
          opacity: 0;
          transition: all 100ms ease-out;
        }

        .modal.show-modal .close-link img {
          opacity: 0.7;
          transform: rotate(720deg);
          transition: all 600ms ease-in-out;
        }

        .modal.show-modal .close-link img:hover,
        .modal.show-modal .close-link img:focus {
          opacity: 1;
          transition: opacity 100ms ease-out;
        }

        .modal-img {
          display: block;
          width: 100%;
          max-width: 600px;
          opacity: 0;
          visibility: hidden;
        }

        .modal.show-modal .modal-img {
          opacity: 1;
          visibility: visible;
          transition: all 300ms 200ms ease-out;
        }
      `}</style>
    </div>
  );
};

export default Modal;
