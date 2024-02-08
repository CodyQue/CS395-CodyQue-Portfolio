import "./welcome.css";

function Welcome() {
    return (
        <div class = 'container' id = 'welcomeContainer'>
            <div class = 'row'>
                <div class = 'col-3'></div>
                <div class = 'col-5'>
                    <div id = 'welcome'>
                        <h8 id = 'welcomeMsg'>Welcome To My Page!</h8>
                        <p class = 'pgraph'>My name is Christopher (Cody) Querubin, and I am a Senior majoring in Computer Science! I am interested in working with full-stack web development, cybersecurity, cloud computing, and databasing. I aim to learn, gain experience, and apply my programming skills in a real-world setting.

                        </p>
                    </div>
                </div>
                <div class = 'col-3'>
                    <h8>Hello world</h8>
                </div>
            </div>
        </div>
    )
}

export default Welcome;