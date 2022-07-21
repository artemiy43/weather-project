// import './InfoTooltip.css';
import imageDeclinedPath from '../images/declined.svg';
// import imageAcceptedPath from '../../images/accepted.svg';

function InfoTooltip({ isOpen, onClose}) {
  return(
    <div className={isOpen ? `popup popup_opened` : `popup`}  >
      <div className="popup__container">
      <button onClick={onClose} aria-label="Закрыть" type="button" className="popup__close-button"></button>
      <img alt="Картинка" className="popup__image" src={imageDeclinedPath}/>
      <p className="popup__text">Необходимо щёлкнуть левой кнопкой выши по карте</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
