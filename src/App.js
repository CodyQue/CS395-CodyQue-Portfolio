/**
 * Layout of the website. This adds the title, as well as the menu of the page.
 */
import './App.css';
import Menu from './menu.js'

function App() {
  return (
    <div className="App">
       <div class = "container" id = 'appContainer'>
            <div class = "row">
                <div class = "col-3"></div>
                <div class = "col-5">
                    <h1>Christopher (Cody) Querubin</h1>
                    <h4>Computer Science At George Mason University, 2024</h4>
                </div>
                <div class = "col-3"></div>
            </div>
            <div class = "row">
                <div class = "col-3">
                </div>
                <div class = "col-5">
                    <Menu />
                </div>
                <div class = "col-3">
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default App;
