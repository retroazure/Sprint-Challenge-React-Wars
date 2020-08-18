import React, {useState, useEffect} from 'react';
import './App.css';
import 'axios';
import Character from './components/Character';


const axios = require('axios');

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState();

  
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/').then((response)=>{
      console.log(response.data.results);
      setCharacterList(response.data.results);
      return characterList;
    }).catch(()=>{
      console.log("An Error Has Occurred");
    })
  }, []);


  
  if(!characterList){
    return <h3>Loading...</h3>;
  }

  const takeCharacters = characterList;


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character dataCharacter={takeCharacters}/>
    </div>
  );
}

export default App;
