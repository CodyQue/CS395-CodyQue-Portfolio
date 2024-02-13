/**
 * Layout of the website. This adds the title, as well as the menu of the page.
 */
import './App.css';
import Menu from './menu.js'

function App() {
  return (
    <div className="App">
       <div class = "container">
            <div class = "row">
                <div class = "col-3">
                </div>
                <div class = "col-5">
                    <h1>Christopher (Cody) Querubin</h1>
                    <h4>Computer Science At George Mason University, 2024</h4>
                    <a href="https://www.linkedin.com/in/christopher-cody-querubin-890766205/" id = "sm1"><p><b>LinkedIn</b></p></a>
                    <img src='./linkedin.png' alt="Linkedin Logo" id = 'sm1img'></img>
                    <a href="https://github.com/CodyQue" id = "sm2"><p><b>Github</b></p></a>
                    <img src='./github.png' alt="Github Logo" id = 'sm2img'></img>
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
