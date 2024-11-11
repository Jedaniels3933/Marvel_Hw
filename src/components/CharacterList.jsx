import { useState, useEffect } from 'react'; 
import CharacterDetail from './CharacterDetail';
import axios from 'axios'; 




const CharacterList = () =>  {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacterID, setSelectedCharacterID] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async ()=> {
            try {
                const response = await axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2b704055d59fcfb644809ce43dccf3cf&hash=bb132c516e79bbb093a0d154873cb1fa")

  
                setCharacters(response.data.data.results);
            } catch (error){
                console.log(error)
            }
        }
        fetchCharacters();
    }, []);

    return (
        <div className='layout'>
          {characters.map((character) => (
            <div key={character.id} onClick={() => setSelectedCharacterID(character.id)}>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
          ))}
          {selectedCharacterID && (
            < CharacterDetail characterId = {selectedCharacterID} onClose = {() => setSelectedCharacterID(null)}/>
          )}
        </div>
    );   
}

export default CharacterList;