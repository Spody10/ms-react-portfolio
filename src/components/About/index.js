import React from 'react';

function About() {
    return (
        <section>
            <div className="d-flex pb-5">
                <div className="section-heading">
                <h3 className="">About Me</h3>
                </div>
            </div>
            <div className="w-100">
                <div className="bio-image"></div>
                <article className="pt-4 px-3 bio-text">
                <p className="py-2">I recently obtained a certificate as a Full Stack Developer from Vanderbilt University.</p> 
                <p className="py-2">I have both front end and back end skills including, but not limited to, HTML, CSS, Javascript, MySQL, and MERN. See resume link above for full list of skills developed.</p> 
                <p className="py-2">My previous work in...gives me an edge over some people due to...</p> 
                <p className="py-2">Outside of work, I like to spend time with family and friends, go fishing, and playing/watching sports.</p>
                <p className="py-2">The portfolio link above will give you examples of some of the work I've recently done. </p>
                </article>
            </div>
        </section>
    )
}

export default About;
