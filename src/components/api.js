class Api {                                //класс API для работы с сервером
    constructor(contentType) {                              
      this._contentType = contentType;                      //контент тайп
    }
  
    _checkStatus(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInfo(lat, lon) {                                                        
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current&appid=8072e91a7d54de802588c05aca86db91&lang=ru&units=metric`, {
        method: 'GET',
      })
      .then((res) =>{
        return this._checkStatus(res);
      });
    }
  }
  

  export const api = new Api('application/json');