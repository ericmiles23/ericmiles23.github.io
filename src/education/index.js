import React from 'react';
import Company from '../experience/company';
import Position from '../experience/position';

const Education = () => {
    return (
        <section>
            <header className='major' >
                <h2>Education</h2>
                <div>
                    <Company name="Texas A&amp;M University" />
                    <Position
                        position={"Bachelor's Degree Marketing"}
                        date={'2010 - 2014'} 
                     />
                </div>
            </header>
        </section>
    );
}

export default Education;