import "./education.css"

function Education() {
    return (
        <div className="Education">
            <div className="container">
                <div className = 'row'>
                    <div className = 'col-3'>
                        <h1>1) <b>George Mason University (August 2020 - May 2024)</b></h1>
                        <p><b>Bachelors Degree:</b> Computer Science (Cumulative GPA: 3.5)</p> 
                        <p><b>Courses Taken: </b>CS 483: Algorithms & Analysis, CS 471: Operating Systems, CS 468: Secure Programming, 
                        CS 452: Virtual Reality, CS 450: Database Concepts, CS 367: Systems & Software Programming, CS 351: Visual Computing, 
                        CS 330: Formal Methods & Modeling, CS 321: Software Engineering, CS 310: Data Structures, CS 306: Synthesis of Ethics and Law for the Computing Professional, 
                        STAT 344: Probability and Statistics for Engineering and Scientists I</p>
                        <p><b>Activities: </b>General Body Member: Filipino Culture Association (FCA)</p>
                    </div>
                    <div className = 'col-3'>
                        <h1>2) <b>Herndon High School (August 2016 - June 2020)</b></h1>
                        <p>Advanced Diploma (Cumulative GPA: 4.0)</p> 
                        <p>Activities: Cross Country, Track & Field</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;