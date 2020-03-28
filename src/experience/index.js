import React from 'react';
import Position from './position';
import Company from './company';

const Experience = () => {
    return (
        <section id='experience' >
            <header className='major' >
                <h2>Experience</h2>
                <div >
                    <Company name="Hearts &amp; Science" />
                    <Position
                        position="Supervisor"
                        date="Mar 2020"
                    />
                    <Position
                        position="Senior Social Media Strategist"
                        date="Sept 2019"
                    />
                    <Position
                        position="Social Media Strategist"
                        date="June 2018"
                    />
                    <Position
                        position="Social Media Assistant"
                        date="Oct 2016"
                    />
                    <p>
                        Supervise a team responsible for campaign strategy,
                        creation, optimization, and insight generation surrounding
                        Cricket Wireless social media campaigns
                    </p>  
                </div>
            </header>
        </section>
    );
}

export default Experience;