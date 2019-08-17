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
                        position="Social Media Strategist"
                        date="June 2018"
                    />
                    <Position
                        position="Social Media Assistant"
                        date="Oct 2016"
                    />
                    <p>
                        Supervise a team responsible for campaign forecasting,
                        creation, optimization, and reporting surrounding AT&amp;T
                        Business Solutions and Corporate Sponsorship campaigns 
                    </p>  
                </div>
            </header>
        </section>
    );
}

export default Experience;