function Menu({isOnGlobe, isOpen, setValue, items, parametres, handleIsOpen}) {
    
    return(
        <div className={(isOpen===true) ? "menu" : "menu-unable"} id="menu">
            <p className="menu__title">Weather Data</p>
            <select className="select" onChange={e => setValue(e.currentTarget.value)}>
              {items.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          
            <button type="button" onClick={handleIsOpen}>{(isOpen===true) ? "Закрыть" : "Открыть"}</button>

            <div className={(isOpen===true) ? "menu__grid-container" : "menu__grid-container-unable"}>
              <p className="menu__span-coordinates">Geomagnet coordinates</p>
              <p className="menu__span-origin">Latitude (MAG): </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[13].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Longitude (MAG): </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[14].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">R (MAG), [km]: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[15].toFixed(4) : "NULL"}</p>
              <p className="menu__span-coordinates">Parameters of Geomagnetic Dipole</p>
              <p className="menu__span-origin">Coordinates of North Pole, [degrees] N: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[10].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Coordinates of North Pole, [degrees] E: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[11].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Magnetic Moment, [T∙m3]: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[12] : "NULL"}</p>
              <p className="menu__span-coordinates">Parameters of Geomagnetic Field</p>
              <p className="menu__span-origin">Induction Potential, [nT∙km]: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[3].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">North Component (X), [nT]: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[4].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">East Component (Y), [nT]: </p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[5].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Down Component (Z), [nT]:</p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[6].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Total Intensity (F), [nT]:</p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[7].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Magnetic Declination, [degrees]:</p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[8].toFixed(4) : "NULL"}</p>
              <p className="menu__span-origin">Magnetic Inclination, [degrees]:</p>
              <p className="menu__span-origin">{(parametres.length!==0 && isOnGlobe) ? parametres[9].toFixed(4) : "NULL"}</p>
            </div>
        </div>
    );
}

export default Menu;