import logo from './logo.svg';
import './App.css';

function App() {

  const allPersons = [

    { name: 'faria', id: '193-15-2918', dept: 'CSE' },
    { name: 'Rakib', id: '193-15-2944', dept: 'CSE' },
    { name: 'apel', id: '193-15-2984', dept: 'CSE' },
    { name: 'Nahid', id: '193-15-3006', dept: 'CSE' },
    { name: 'Misu', id: '193-15-2974', dept: 'CSE' },
    { name: 'Fahim', id: '193-15-2956', dept: 'CSE' },

  ]

  return (
    <div className="App">


      {
        allPersons.map(person => <Person name={person.name} id={person.id} dept={person.dept}></Person>)
      }

      {/* <Person name='Apel Mahmud' id='193-15-2984' dept='CSE'></Person> */}


    </div>
  );
}


function Person(props) {
  return (

    <div className='Person'>

      <h2>Name : {props.name}</h2>
      <h3>ID :  {props.id}</h3>
      <h4>Deperment : {props.dept}</h4>

    </div>

  );

}



export default App;
