import './App.css';
import Wilder from "./Wilder";

const wilderProfile = [
  {
    name: 'Alan',
    skills: [
      {title:'PHP', votes: 3}, 
      {title:'Symfony', votes: 13}
    ]
  },
  {
    name: 'Manon',
    skills: [
      {title:'PHP', votes: 3},
      {title:'Node', votes: 13}
    ]
  },
  {
    name: 'Georgette',
    skills: [
      {title:'React', votes: 3}, 
      {title:'Symfony', votes: 13}
    ]
  }
];

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilderProfile.map((el) => <Wilder {...el}/>)}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
