import "./welcome.css";

function Welcome() {
    return (
        <div className = 'welcome'>
            <div className = 'container'>
                <div className  = "row">
                    <div className  = 'col-1' id = "welcomeDiv">
                        <img src='./cody.png' alt="Image Of The GOAT"></img>
                        <div>
                            <h2><b>Welcome To My Page!</b></h2>
                            <p className = 'pgraph'>Thank you for visiting! My name is Christopher (Cody) Querubin, and I am a Senior majoring in Computer Science! I am interested in working with full-stack web development, cybersecurity, cloud computing, and databasing. I aim to learn, gain experience, and apply my programming skills in a real-world setting.</p>
                        </div>
                    </div>
                </div>
                <div className  = "row">
                    <div className  = 'col-1'>
                        <div id = "intro">
                            <h3><b>About Me! (And some of my hobbies)</b></h3>
                            <p className = 'pgraph'>Aside from programming, I have a few hobbies relating with computers and technologies.
                            One hobbie that interests me was building keyboards. Here are a few keyboards that I have built before.</p>
                        </div>
                        <ul id = "keyboardlist">
                            <li>
                                <img src='./kb1.png' alt="Image Of The GOAT"></img>
                                <ui>
                                    <li className = 'title'><h1><b>Keyboard #1: QK75</b></h1></li>
                                    <li><h4>- Akko Cream Yellow V3 Switches</h4></li>
                                    <li><h4>- PBT Shenpo Keycaps</h4></li>
                                    <li><h4>- Polycarbonate Plate</h4></li>
                                    <li><h4>- PE Foam, Case Foam, Tape Mod</h4></li>
                                </ui>
                            </li>
                            <li>
                                <img src='./kb2.png' alt="Image Of The GOAT"></img>
                                <ui>
                                    <li className = 'title'><h1><b>Keyboard #2: Bakeneko60</b></h1></li>
                                    <li><h4>- Gateron Cap Gold Switches</h4></li>
                                    <li><h4>- Cherry Milkshake Keycaps</h4></li>
                                    <li><h4>- Polycarbonate Plate</h4></li>
                                    <li><h4>- PE Foam, Case Foam, Tape Mod</h4></li>
                                </ui>
                            </li>
                        </ul>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;