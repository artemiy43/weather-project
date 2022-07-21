import React from "react";
import Maps from "./Map";
import ZDMap from "./3DMap";
import { api } from "./api";
import Menu from "./Menu";
import InfoTooltip from "./InfoTooltip";
function Main() {
  const [lat, setlat] = React.useState(0);
  const [long, setlong] = React.useState(0);

  const [parametres, setParametres] = React.useState({});

  const [value, setValue] =  React.useState(0);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOnGlobe, setIsOnGlobe] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpened] = React.useState(false);
  const num = 0;

  let Mapitems = [
    <ZDMap setInfoTooltipOpened={setInfoTooltipOpened} isOnGlobe={setIsOnGlobe} num={num} onClick={handleMapClick}  onClickMap={handleParametres}/>,
    <Maps num={num} onClick={handleMapClick}  onClickMap={handleParametres}/>
  ];

  const items = [
    { label: "3DMap", value: 0 },
    { label: "2DMap", value: 1 },
  ];

  React.useEffect(()=> {
    api.getInfo(lat, long)
    .then((res) => {
      handleParametres(res);
    })
    .catch(err => {
      console.log(err);
    });
  },[lat, long]);
  
  function closePopup() {                      // закрытие попапа
    setInfoTooltipOpened(false);
  }

  function handleIsOpen(){
    setIsOpen(!isOpen);
  }

  function handleMapClick(X, Y) {
    setlat(X);
    setlong(Y);
  }

  function handleParametres(parametres) {
    setParametres(parametres);
  }

  return(
    <>
      <main className="content">
        <Menu isOnGlobe={isOnGlobe} isOpen={isOpen} setValue={setValue} items={items} parametres={parametres} handleIsOpen={handleIsOpen}/>
        <div className="map__container page__container">
            {Mapitems[value]}
        </div>
      </main>
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closePopup}/>
    </>
  );
}

export default Main;