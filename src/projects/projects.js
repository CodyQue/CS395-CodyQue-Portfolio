import "./projects.css"

function Projects() {
    return (
        <div className="Projects">
            <div className="container">
                <div className = 'row'>
                    <h2><b>Current / Past Projects</b></h2>
                    <div className = 'col-3'>
                        <h3>1) <b>CS 452: Virtual Reality- Cooking Game!</b><a href="https://www.cs452cooking.com/"><p>Project Website</p></a></h3>
                        <img src='./CookingGILlow.gif' alt="VR Cooking Game"></img>
                        <p><b>Description: </b>Dive into the culinary world with 'Intense Cooking Game,' a virtual reality experience that challenges players to become master chefs. Developed by a talented team of young developers, this game combines the thrill of time management with the art of cooking. The objective is simple yet exhilarating: cook as many orders as possible within a set time limit, earning points and money for accuracy and efficiency. With dynamic components like random orders, diverse ingredients, and interactive kitchenware, players use artificial hands to create a variety of dishes. The game's intuitive design allows players to easily grasp cooking techniques, from chopping to frying. Upgrade options, including faster cook times and efficient equipment, add strategic depth. 'Intense Cooking Game' promises a virtual kitchen adventure where players can test their culinary skills, immerse themselves in a realistic kitchen environment, and aim for the highest score before the day is done.</p> 
                        <p><b>Skills Used: </b>C#, Unity Engine, Oculus Quest</p>
                    </div>
                    <div className = 'col-3'>
                        <h3>2) <b>CS 395: Tab Browser Extension</b></h3>
                        <p><b>***PROJECT IS PRIVATE, PLEASE CONTACT ME FOR ANY QUESTIONS REGARDING THIS PROJECT***</b></p>
                        <img src='./browserextension.png' alt="Tab Browser Extension" id = 'beimg'></img>
                        <p><b>Description: </b>A browser extension that, when opens a new tab, it directs the user to a custom page that contains a live clock, countdown timer, and a random quote.</p> 
                        <p><b>Skills Used: </b>HTML, CSS, JavaScript, BootStrap</p>
                    </div>
                    <div className = 'col-3'>
                        <h3>3) <b>CS 395: Portfolio</b><a href="https://github.com/CodyQue/CS395-CodyQue-Portfolio/"><p>Project Github Repository</p></a></h3>
                        <p><b>Description: </b>A website that generates the portfolio of Cody Querubin (aka, this website).</p> 
                        <p><b>Skills Used: </b>HTML, CSS, JavaScript, NodeJS, ReactJS, BootStrap, VantaJS, AWS Amplify</p>
                    </div>
                    <div className = 'col-3'>
                        <h3>4) <b>CS 321: GMU Class Schedule Maker Browser Extension</b><a href="https://github.com/CodyQue/CS321-Browser-Extension/"><p>Project Github Repository</p></a></h3>
                        <img src='./cs321.png' alt="CS321 Project"></img>
                        <p><b>Description: </b>Are you struggling with what courses to take for next semester? Are you reconsidering some of your courses since the class got filled up? Then have no fear! The GMU Class Schedule Maker Browser Extension is here! The user input courses they want to take, and using the Puppeteer library, the program scrapes the George Mason University and Rate My Professor websites to generate a schedule with the best-rated professors.
                        It scrapes the GMU website for courses available, and it scrapes RateMyProfessor to find the best rated professors. Combining both of these aspects, it generates a schedule for the user.</p> 
                        <p><b>Skills Used: </b>HTML, CSS, JavaScript, NodeJS, ExpressJS, SQLite3, Microsoft Azure, Puppeteer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;