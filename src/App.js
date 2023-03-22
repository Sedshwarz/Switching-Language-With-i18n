import i18n from "./i18n"
import './App.css';
import Card from './components/card'
import Langs from './components/langs'

function App() {

    const changeLng = (val) =>{
      i18n.changeLanguage(val)
    }

  return (
    <div className="App">
      <Langs func={changeLng} />
      <Card />
    </div>
  );
}

export default App;
