import './App.css';
import Avatar from './Avatars'
import './Avatars.css';
const famille = [{
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
},
{
  image: "http://assets.stickpng.com/images/5a0c40a65a997e1c2cea116c.png",
  firstName: "homer",
  lastName: "Simpson"
},
{
  image: "https://www.lessimpson.fr/wp-content/uploads/marge-simpson.webp",
  firstName: "Marge",
  lastName: "Simpson"
},
{
  image: "https://image.noelshack.com/fichiers/2017/51/2/1513711365-ned-flanders-2.png",
  firstName: "Ned",
  lastName: "Flanders"
},
{
  image: "https://www.lessimpson.fr/wp-content/uploads/les-simpson-milhouse-van-houten.webp",
  firstName: "Milhouse",
  lastName: "Van Houten"
}];

function App() {
// on peut faire un tableau
  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };

  return (
    <div className="App">
    <header className="App-header">
    <div className="App">
        <img className="Affiche" alt="the simpsons movie" src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/23/Les_Simpson%2C_le_film_Logo.svg/1200px-Les_Simpson%2C_le_film_Logo.svg.png"/>
        <div className="Photomaton">
        {famille.map((personnages, index) => (
          <Avatar firstName={personnages.firstName} lastName={personnages.lastName} image={personnages.image}/>
        ))}
        {/*
        <Avatar {...famille[0]} />
        <Avatar {...famille[1]} />
        <Avatar {...famille[2]} />
        <Avatar {...famille[3]} />
        <Avatar {...famille[4]} />
        */}

    </div>
    </div>
    </header>
    </div>
  );

}


export default App;
