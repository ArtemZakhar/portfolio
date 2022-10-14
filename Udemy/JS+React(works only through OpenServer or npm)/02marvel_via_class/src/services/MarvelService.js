

class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=9a8a4040cb463190766541cc6b9a8d94';
  _baseOffset = 210;

  getResourse = async (url) => {
    let res = await fetch(url);
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
  
    return await res.json();
  };

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  }

  _transformCharacter = (char) => {

    if (char.description === '') {
      char.description = "There is no description at the moment";
    }
 
    if (char.description.length > "220") {
      char.description = char.description.slice(0, 215) + "…";
    }

    return {
      id: char.id,
      name: (char.name.length > 22) ? `${char.name.slice(0,22)}...`: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  }
}

export default MarvelService;