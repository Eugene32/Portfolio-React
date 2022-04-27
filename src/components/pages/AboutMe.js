import React from 'react';
import Avatar from '../assets/images/Photo 1.JPG';

const AboutMe = () => {

    return (
        <div className='my-padding-top w-auto '>
            <section id="about-me" className="section box">

                <div className="container">
                    <div class="align-items-start">
                        <div>
                            <span className='title is-1 level-left ml-6'>About Me</span>
                            <br/>
                        </div>
                        <div >
                            <div className='card  w-25 px-3'>
                                <img className='w-100 py-3' src={Avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="mt-4 ml-0 card w-100 px-2">
                            <h3 className='text-start' >Junior Full-Stack Web Developer</h3>
                            <p>
                                Proactive multi-faceted person driven by the continuous improvement quest for quality and optimal processes efficiency. Have an in-depth experience in technical, conceptual, and content development of procedures, systems, control plans and work instructions. Proven ability to drive project completion and developing people’s skills to improve overall performance and productivity. Able to management a diverse mix of people in terms of background, race, and intellectual levels on a team project.
                            </p><p>
                                My interest in coding and love of new technology, along with the opportunity presented for studies allowed me to go for this career change.  My interest and programming skills are evident in the skills and responsibilities that I had as a quality engineer or manager.
                            </p><p>
                                I believe that my working experience in various positions and industries would enable me to be effective in any task that I will be handling.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
};

export default AboutMe;