import React, { Component } from 'react'


export default class BT3Carousel extends Component {

    render() {
        return (
            <section id="promoted-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#promoted-carousel" data-slide-to={0} className="active" />
                    <li data-target="#promoted-carousel" data-slide-to={1} />
                    <li data-target="#promoted-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        {/* root đi từ public */}
                        <img className="img-fluid" src="./images/slide_1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="./images/slide_2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="./images/slide_3.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#promoted-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#promoted-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </section>


        )
    }
}
