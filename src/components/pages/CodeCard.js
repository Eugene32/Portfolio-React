import React, { Component } from 'react';
import CodeItems from './CodeItems.js'
// import Image from '../assets/images/react.png'
// import '../assets/css/style.css'
// import IMAGES from './index2.json'



class CodeCard extends Component {

    render() {
        return (
            <div className='container' style={{ height: "500px" }}>
                <div className='row row-cols-3 ' style={{ height: "400px" }}>
                    {
                        CodeItems && CodeItems.map((item, index) => {

                            return (
                                <div className='col box h-50 text-center'>
                                    <div className='col box h-100 text-center' >

                                        <div key={index} >
                                            <a href={item.applink} target="_blank" rel="noreferrer">{item.title}</a>
                                            <a href={item.githublink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github-square fa-2xl px-3"></i></a>
                                            <img src={item.image} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    }

};

export default CodeCard;