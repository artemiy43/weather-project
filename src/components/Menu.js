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
              <p className="menu__span-origin">Основное описание: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.weather[0].description : "NULL"}</p>
              <p className="menu__span-coordinates">Температура</p>
              <p className="menu__span-origin">Основная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.temp : "NULL"}</p>
              <p className="menu__span-origin">Максимальная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.temp_max : "NULL"}</p>
              <p className="menu__span-origin">Минимальная[градусы Цельсия]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.temp_min : "NULL"}</p>
              <p className="menu__span-origin">Как чувствуется[градусы Цельсия]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.feels_like : "NULL"}</p>
              <p className="menu__span-coordinates">Ветер</p>
              <p className="menu__span-origin">Скорость[м/с]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.wind.speed : "NULL"}</p>
              <p className="menu__span-origin">Направление[градусы]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.wind.deg : "NULL"}</p>
              <p className="menu__span-coordinates">Другие показатели</p>
              <p className="menu__span-origin">Атмосферное давление[Гектопаскаль]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.pressure : "NULL"}</p>
              <p className="menu__span-origin">Влажность[Проценты]: </p>
              <p className="menu__span-origin">{(parametres!=={} && isOnGlobe) ? parametres.main.humidity : "NULL"}</p>
            </div>
        </div>
    );
}

export default Menu;