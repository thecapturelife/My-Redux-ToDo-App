import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const backgroundStyle = {
    backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/830/127/705/anonymous-computer-hacker-legion-wallpaper-preview.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div className="App" style={backgroundStyle}>
      <h1 style={{ color: '#BF642D', fontFamily: 'monospace' }}><b>ToDoList</b></h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

