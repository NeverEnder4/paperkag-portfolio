const Modal = ({ onModalClick, displayed, imgSrc, imgAlt }) => {
  const showModalClass = displayed ? 'show-modal' : '';
  return (
    <div onClick={onModalClick} className={`modal ${showModalClass}`}>
      <img src={imgSrc} alt={imgAlt} className="modal-img" />
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

        .modal-img {
          display: block;
          width: 100%;
          max-width: 600px;
          opacity: 0;
          visibility: hidden;
          transition: all 200ms 300ms ease-out;
        }

        .modal.show-modal .modal-img {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
};

export default Modal;
