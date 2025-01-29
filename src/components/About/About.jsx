import React from "react";
import "../About/about.css"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="leftabout">
        <div className="leftbox">
        <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim at illo eos voluptatibus repudiandae quam maxime a illum ratione.
        </p>
        </div>
      </div>
      <div className="rightabout">
        <div className="skills">
            <div className="technical">
                <h2>Technical Skills</h2>
                <ul>
                    <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" /></li>
                    <li><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png" alt="" /></li>
                    <li><img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="" /></li>
                    <li><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" alt="" /></li>
                    <li><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="" /></li>
                    <li><img src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon-thumbnail.png" alt="" /></li>
                    <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" alt="" /></li>
                </ul>
            </div>
            <div className="soft">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Communication</li>
                    <li>Leadership</li>
                    <li>Time Management</li>
                    <li>Teamwork</li>
                    <li>Collaborative</li>
                </ul>
            </div>
        </div>

        <div className="internships">
            <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAfZJREFUSEvtlDFM20AUhv93QaEDKwtLk7FLp0odCUNHhsRNPUKwWDohYTGwAFOXOM2ClChNSRlL00KXLrUaBBtTV5aGmYXOwffKSTG6JI7tGCkLvck+vfu/9/577whTWjQlDh4xaOvw6zOvx3kC0p6U7vv14tkktoda54szFIBeDAgz/yWin0TC9VLsVlYKl2HgEVCoeHgJl0RwidntiZRbLeVv9PB70GazvR2Y+ST+DMaeE+CWLWNXbeug3wCeJ9cNPNlzLCM9AFI/9sfjlwxpgmECvJAYSrggRr1sGU1fY2wz2B++LDORCSgoZuJAieiE2as7VvHHcHzkwL7d/zw3+yRlClUl4VUAkAGuM0StYhWU/YFrBGQ327sMPGXgtGIZLf2U3fieZXFrEsFk5nkG6rPk1d6tvblWcRsH3zIzUq4y8aKz9nopsOv8zc1m+wDAav+/5QmxJ6TMDUN1kXsAsNPf7zqWkZ0IRFJ+YiF+3cG7ADp6pXbjKMdCrGiJ+doPAukJKqhamTFXMiGIuENMp3e37VsSp/lUTDRI+Z2S8k9cxaA4Avb8FyF0jvreq6YYZ01YHi3HMkqx50hvVTDlYlTYJSlL5fViZ0yV0RIKqlpcABk1Y5odV+r7VohWtZT3GyTewEZjk0VEPkHJZEdP/QcldvIfXajRG2MZJroAAAAASUVORK5CYII="/>Education</h1>
            <div className="int1">
                <h2>B.Tech(CSAIML)</h2>
                <p className="para">Trident Academy Of Technology.(2020-2024)</p>
                <p>Bachelor of Technology in Artificial Intelligence and Machine Learning under Biju Pattnaik University Of technology(BPUT).</p>
            </div>
            <hr />
            <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAUNJREFUSEvtlkFSwkAQRX8PFwknEY9gRdeIKfaWYY/ZE8u9FcG1pDwC8STmIIa2OpIYdTJpoIoFmvWf/3p6fs+EcKCPDsRBJ2jy8DzgHk3B5FmLIs6p4Gg2vshcRTtB1/MXr7dev2l2XRjTvx+d5W1aJ+gmSS8JmAPIGYhsJkQ8BNOAgdFd4C/2AxFn8dX5qc0kTFIpRAqKZoF/qwZNkrQWM/GJVCs7IuDJZsLAEIAH4oyYXivNuzGLZivr1pWHbsxKcx5aTXOXNahqgdZEqcvjwO+LtgmSdNkjrHS1yeLALxlHDNqjO6qlX617XK5ar5myyZz/nKVNgCT+rd8uYagTVLmGn8V1gXYIA/H3i7MDIgX9gdSFSfo/sKr5+RUGeR4YmKpWK0XW23vzbAvIORdKhsiywpioepM6f062MHZKjw/0ASpEjxsoTHtKAAAAAElFTkSuQmCC"/>Internships</h1>
            <div className="int2">
                <h2>Tetratrion Technologies</h2>
                <p className="para">FullStack Developer Intern(6 months)</p>
                <p>Designed and developed multiple dynamic and responsive websites using MERN stack. Designed multiple websites with animations and unique UI design. Explored ways to visualize GitHub collaboration in a classroom setting.</p>
            </div>
            <div className="int3">
                <h2>Cognifyz Technologies</h2>
                <p className="para">Frontend Developer Intern(2 months)</p>
                <p>Created a user friendly web application to make connection between local sellers/vendors/suppliers with the world. Purchase products from different wholesalers from multiple states.Integrated with in-built invoice generator.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
