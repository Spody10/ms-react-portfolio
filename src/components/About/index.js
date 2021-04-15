import React from 'react';

function About() {
    return (
        <section>
            <div className="d-flex pb-5">
                <div className="section-heading">
                <h3 id="about"className="">About Me</h3>
                </div>
            </div>
            <div className="">
                <div className="bio-image"></div>
                <article className="pt-4 px-3 bio-text">
                <p>I recently obtained a certificate as a Full Stack Developer from Vanderbilt University.</p> 
                <p>I have both front end and back end skills including, but not limited to, HTML, CSS, Javascript, MySQL, and MERN. See resume link above for full list of skills developed.</p> 
                <p>My previous work experience in sales and retail gives me an edge over some people because I'm able to probe for solutions to people's problems easily.  </p> 
                <p>Outside of work, I like to spend time with family and friends, go fishing, and playing/watching sports.</p>
                <p>The portfolio link above will give you examples of some of the work I've recently done. </p>
                </article>
            </div>
        </section>
    )
}

export default About;
