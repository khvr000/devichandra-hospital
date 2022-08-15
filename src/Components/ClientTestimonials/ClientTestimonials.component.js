import React, {Component} from 'react';
import "./ClientTestimonials.css";

class ClientTestimonialsComponent extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="client-testimonials-container">
                <div className="ct-header-wrapper">
                    <div className="header-title">
                        Testimonials
                    </div>
                    <div className="header-text">
                        What Our Clients Say
                    </div>
                </div>

                <div className="client-testimonials-content">
                        <article className="testimonial-item">
                            <div className="testimonial-item-header">
                                <div className="testimonial-item-header-photo">
                                    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />
                                </div>
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                            Vanessa Adams
                                    </div>
                                    <div className="testimonial-item-header-text">
                                            Businessman
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
                            </div>
                        </article>


                        <article className="testimonial-item">
                            <div className="testimonial-item-header">
                                <div className="testimonial-item-header-photo">
                                    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />
                                </div>
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        Vanessa Adams
                                    </div>
                                    <div className="testimonial-item-header-text">
                                        Businessman
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
                                </p>
                            </div>
                        </article>


                        <article className="testimonial-item">
                            <div className="testimonial-item-header">
                                <figure className="testimonial-item-header-photo">
                                    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />
                                </figure>
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        Vanessa Adams
                                    </div>
                                    <div className="testimonial-item-header-text">
                                        Businessman
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt porta velit, sed suscipit massa consequat sed. Integer est ante, dictum quis metus non, rhoncus accumsan.
                            </div>
                        </article>


                </div>
            </div>
            </div>
        );
    }
}

export default ClientTestimonialsComponent;
