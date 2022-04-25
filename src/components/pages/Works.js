import React from 'react';
import TravelApp from '../assets/images/Travel-App-demo.png';
import FindPet from '../assets/images/Find-A-Pet.png';
import CodeCard from './CodeCard';
import '../assets/css/style.css';




const Works = () => {
    return (
        <div>
            <section id="works" class="columns section ">

                <div class="column">

                    <div class="container box my-background ">
                        <h3 class="text-white bg-dark px-4 rounded text-center" >Projects</h3>
                        <div id="carouselExampleIndicators" class="carousel slide h-50" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0" class="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active ">
                                    <a href="https://eugene32.github.io/Travel-Application/"
                                        target="_blank" rel="noreferrer"><img src={TravelApp}
                                            class="d-block w-100 " alt="Travel-App_pic"></img></a>
                                </div>
                                <div class="carousel-item ">
                                    <a href="https://stormy-anchorage-52853.herokuapp.com/" target="_blank" rel="noreferrer">
                                        <img src={FindPet} class="d-block w-100"
                                            alt="Find-A-Pet_pic"></img></a>
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div >
                        <CodeCard />
                    </div>

                </div>

            </section >


        </div >
    );




};

export default Works;