import "./contacts.css"

function Contacts() {
    return (
        <div className="Contacts">
            <div className="container">
                <div className = 'row'>
                    <div className = 'col-3'>
                        <h1><b>Contact Me!</b></h1>
                        <a href="https://www.linkedin.com/in/christopher-cody-querubin-890766205/"><p>LinkedIn</p></a>
                        <a href="https://www.linkedin.com/in/christopher-cody-querubin-890766205/"><p>Contact Me Through LinkedIn</p></a>
                    </div>
                    <div className = 'col-3'>
                        <h1><b>Any Questions? Send Me An Email!</b></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;