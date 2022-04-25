import React from 'react'
import CV from '../assets/docs/cv.docx'

export default function Resume() {
    return (
        <div className='container box'>
            <section className='col section'>
                <h3 >Download my <a href={CV}>resume.</a> </h3>
                <h3>Frontend applications</h3>
                <ul>
                    <li>Code Refractor</li>
                    <li>Day Planner</li>
                    <li></li>

                </ul>
                <h3>Backend Application</h3>
                <ul>
                    <li>Find-A-Pet</li>
                    <li>E-Commerce</li>
                    <li>MVC Tech Blog</li>

                </ul>


            </section>
        </div>
    )
}
