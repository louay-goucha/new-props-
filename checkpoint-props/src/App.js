import './App.css';
import Fullname from "./components/profile/FullName";
import Bio from "./components/profile/Bio"
import Age from "./components/profile/Age"
import Profession from "./components/profile/Profession"
import PropTypes from "prop-types"
import ActionLink from "./components/profile/Button"
import Photo from "./components/profile/Photo"
(Fullname, Profession, Bio).Prototype = {
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  
}
Age.prototype = {
  age: PropTypes.number,
}

function App() {
  return (
    <div className="App">
      <Photo/>
      <Fullname name="Gerald Earl Gillum (A.K.A_  G-easy) " />
      <Age age={31} />
      <Profession profession="Rappeur ,singer-songwriter and producer " />
      <Bio bio= "G-Eazy, real name Gerald Earl Gillum, born May 24, 1989 in Oakland, California, is an American rapper, singer-songwriter and producer. G-Eazy carried out numerous projects (mixtapes and EP) before giving birth to his first studio album. He describes his music as contemporary rap enriched with the style of 1950s culture." />
      <ActionLink alert="Profile of Gerald Earl Gillum " />
      
    </div>
  );
}


export default App;
