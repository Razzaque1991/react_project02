import './App.css'
import Jomuna from './jomuna';


function App() {
  return (
    <>
      <h1>Hello Programmer</h1>
      <Person></Person>
      <School name = 'Railway school'></School>
      <Resturent name ='hajir birani' age ='28'  ></Resturent>
      <Paper></Paper>
      <Jomuna name ='jomuna' price = '3000tk'></Jomuna>
    </>
  )
}

function Person() {
  const name = 'bangaldesh';
  const age =1991;
  return (
    <div className='man'>
      <h2>{name}</h2>
      <p>{name} is born in {age}</p>
    </div>
  )
}

const {name} ={name: 'railway school'}
function School({name}) {
  console.log(name);
  return (
    <div className='man'>
      <h1>{name}</h1>
      <p>Railway Colony, Sirajganj</p>
    </div>
  )
}

function Resturent({name , age}) {
  return (
    <div className='man'>
      <h1>{name}</h1>
      <p>Established {age}</p>
    </div>
  )
}
function Paper() {
  const price = 27;
  const name ='prothom allo';
  return(
    <div className='man'>
      <h1>protom alo</h1>
      <p>{name} paper price is : {price}tk </p>
    </div>
  )
}

export default App
