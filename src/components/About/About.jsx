import React from "react";
import "../About/about.css"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="leftabout">
        <div className="leftbox">
        <h1>About</h1>
        <p>
        Every day sketches, brainfarts and ideas flying around in my backpack. I hope they can inspire or help someone out there.
        </p>
        </div>
      </div>
      <div className="rightabout">
        <div className="skills">
            <div className="technical">
                <h2>Technical Skills</h2>
                <ul>
                    <li>React js.</li>
                    <li>Node js.</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MongoDB</li>
                    <li>My SQL</li>
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
                <p>2020-2024</p>
            </div>
            <hr />
            <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAUNJREFUSEvtlkFSwkAQRX8PFwknEY9gRdeIKfaWYY/ZE8u9FcG1pDwC8STmIIa2OpIYdTJpoIoFmvWf/3p6fs+EcKCPDsRBJ2jy8DzgHk3B5FmLIs6p4Gg2vshcRTtB1/MXr7dev2l2XRjTvx+d5W1aJ+gmSS8JmAPIGYhsJkQ8BNOAgdFd4C/2AxFn8dX5qc0kTFIpRAqKZoF/qwZNkrQWM/GJVCs7IuDJZsLAEIAH4oyYXivNuzGLZivr1pWHbsxKcx5aTXOXNahqgdZEqcvjwO+LtgmSdNkjrHS1yeLALxlHDNqjO6qlX617XK5ar5myyZz/nKVNgCT+rd8uYagTVLmGn8V1gXYIA/H3i7MDIgX9gdSFSfo/sKr5+RUGeR4YmKpWK0XW23vzbAvIORdKhsiywpioepM6f062MHZKjw/0ASpEjxsoTHtKAAAAAElFTkSuQmCC"/>Internships</h1>
            <div className="int2">
                <h2>Tetratrion Technologies</h2>
                <p>Duration: 6 months</p>
                <p>Fullstack Developer Intern</p>
            </div>
            <div className="int3">
                <h2>Cognifyz Technologies</h2>
                <p>Duration: 2 months</p>
                <p>Frontend Developer Intern</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
