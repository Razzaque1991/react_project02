import './App.css';
import Jomuna from './Jomuna';
import Players from './Players';
import Brand from './Brand';
import Count from './Count';
import Score from './Score';


function Person() {
  const name = 'Bangladesh';
  const age = 1991;
  return (
    <div className='man'>
      <h2>{name}</h2>
      <p>{name} was born in {age}</p>
    </div>
  );
}

function School({ name }) {
  console.log(name);
  return (
    <div className='man'>
      <h1>{name}</h1>
      <p>Railway Colony, Sirajganj</p>
    </div>
  );
}

function Restaurant({ name, age }) {
  return (
    <div className='man'>
      <h1>{name}</h1>
      <p>Established in {age}</p>
    </div>
  );
}

function Paper() {
  const price = 27;
  const name = 'Prothom Alo';
  return (
    <div className='man'>
      <h1>{name}</h1>
      <p>{name} newspaper price: {price} TK</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello Programmer</h1>
      <Person />
      <School name="Railway School" />
      <Restaurant name="Hajir Biryani" age="28" />
      <Paper />
      <Jomuna name="Jomuna" price="3000 TK" />
      <Players name ='bangladesh' score ='280' />
      <Brand name ='apple' price = '120000'/>
      <Count/>
      <Score/>


    </>
  );
}

export default App;

