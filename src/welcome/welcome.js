import "./welcome.css";

function Welcome() {
    return (
        <div className = 'welcome'>
            <div className = 'container'>
                <div className  = "row">
                    <div className  = 'col-1'>
                        <img src='./cody.png' alt="Image Of The GOAT"></img>
                        <div id = "welcomeDiv">
                            <h2><b>Welcome To My Page!</b></h2>
                            <p className = 'pgraph'>Thank you for visiting! My name is Christopher (Cody) Querubin, and I am a Senior majoring in Computer Science! I am interested in working with full-stack web development, cybersecurity, cloud computing, and databasing. I aim to learn, gain experience, and apply my programming skills in a real-world setting.</p>
                        </div>
                    </div>
                </div>
                <div className  = "row">
                    <div className  = 'col-1'>
                        <h3><b>About Me!</b></h3>
                        <p className = 'pgraph'>Thank you for visiting! My name is Christopher (Cody) Querubin, and I am a Senior majoring in Computer Science! I am interested in working with full-stack web development, cybersecurity, cloud computing, and databasing. I aim to learn, gain experience, and apply my programming skills in a real-world setting.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;