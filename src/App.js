import './App.css';
import Menu from './menu.js'

function App() {
  return (
    <div className="App">
       <div class = "container">
            <div class = "row">
                <div class = "col-3"></div>
                <div class = "col-5">
                    <h1>Christopher (Cody) Querubin</h1>
                    <h4>Computer Science At George Mason University</h4>
                    <div id="root"></div>
                    <Menu />
                </div>
                <div class = "col-3"></div>
            </div>
        </div>
    </div>
    
  );
}

export default App;
