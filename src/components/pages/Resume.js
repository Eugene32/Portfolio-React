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
                    <li>Note Taker</li>
                    <li>Password Generator</li>
                    <li>Travel Application</li>
                    <li>Web-DevOp-Quiz</li>
                    <li>Weather Dashboard</li>
                </ul>

                <h3>Backend Application</h3>

                <ul>
                    <li>E-Commerce</li>
                    <li>Find-A-Pet</li>
                    <li>MVC Tech Blog</li>
                    <li>Note Taker</li>
                    <li>Text Editor</li>
                </ul>

            </section>
        </div>
    )
}
