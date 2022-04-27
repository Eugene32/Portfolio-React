import React, { Component } from 'react';
import CodeItems from './CodeItems.js'
import '../assets/css/style.css'
import image from '../assets/images/mongo-db.jpg'


class CodeCard extends Component {

    render() {
        return (
            <div className='container' style={{ height: "500px" }}>
                <div className='row row-cols-3 ' style={{ height: "400px" }}>
                    {
                        CodeItems && CodeItems.map((item) => {

                            return (
                                <div className='col box h-50 text-center'>
                                    <div className='col box h-100 text-center' >

                                        <div key={item.title} >
                                            <a href={item.applink} target="_blank" rel="noreferrer">{item.title}</a>
                                            <a href={item.githublink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github-square fa-2xl px-3"></i></a>

                                        </div>
                                        <img src={item.image} className="logo" alt="" />
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