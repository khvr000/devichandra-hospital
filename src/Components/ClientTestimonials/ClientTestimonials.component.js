import React, {Component} from 'react';
import "./ClientTestimonials.css";

class ClientTestimonialsComponent extends Component {

    handleTestimonialClick = () => {
        window.open('https://g.co/kgs/KfZzig', '_blank').focus();
    }

    render() {
        return (
            <div className="main-container">
                <div className="client-testimonials-container">
                <div className="ct-header-wrapper">
                    {/*<div className="header-title">*/}
                    {/*    Testimonials*/}
                    {/*</div>*/}
                    <div className="header-text">
                        Highest Rated ENT Hospital in Mahabubnagar
                    </div>
                </div>

               <div className="hospital-rating">
                   <div className="hospital-rating-google">
                       <div className="hospital-rating-google-name">
                           <img className="rating-provider-image" src="../assets/google.jpg" />
                       </div>
                       <div className="rating-container">
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                       </div>
                       <div className="actual-rating">(4.6)</div>
                   </div>
                   <div className="hospital-rating-justdail">
                       <div className="hospital-rating-justdail-name">
                           <img className="rating-provider-image" src="../assets/ju7956j474-justdial-logo-justdial-logo-download-vector.png" />
                       </div>
                       <div className="rating-container">
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                           <i className="material-icons-outlined rating-star">star</i>
                       </div>
                       <div className="actual-rating">(4.7)</div>
                   </div>
               </div>

                <div className="client-testimonials-content">
                        <article className="testimonial-item" onClick={this.handleTestimonialClick}>
                            <div className="testimonial-item-header">
                                {/*<div className="testimonial-item-header-photo">*/}
                                {/*    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />*/}
                                {/*</div>*/}
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        Banawatremesh Bhima
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                <div className="rating-wrapper">
                                    <div className="rating-provider">
                                        <img className="rating-provider-image" src="https://raosentcare.com/wp-content/uploads/2021/07/google-reviews1-150x150.jpg" />
                                    </div>
                                    <div className="rating-container">
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                    </div>
                                </div>

                                <span>
                                    Excellent & very  cheap for ENT treatment in Mahaboobnagar District.I was not able to hear properly & some fluids coming  out from my Right EAR. I Visited hospital and check up & X-ray done by Sir & he suggested me for Surgerydue to my Temporal bone was damaged.  The surgery was done on my right EAR successfully . I was under observation for TWO days afterwards I can hear very clearly.Thank you Dr Chandra Sekhar Sir for his giving the best treatment & excellent
infrastructure & staff.From BANAWAT RAMESH BHIMA R/o. Kosgi Mandal District Narayan peth Telangana India.
                                </span>
                            </div>
                        </article>


                        <article className="testimonial-item">
                            <div className="testimonial-item-header">
                                {/*<div className="testimonial-item-header-photo">*/}
                                {/*    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />*/}
                                {/*</div>*/}
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        G Shiva
                                    </div>
                                    {/*<div className="testimonial-item-header-text">*/}
                                    {/*    Businessman*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                <div className="rating-wrapper">
                                    <div className="rating-provider">
                                        <img className="rating-provider-image" src="https://raosentcare.com/wp-content/uploads/2021/07/google-reviews1-150x150.jpg" />
                                    </div>
                                    <div className="rating-container">
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                    </div>
                                </div>
                                <p>
                                vary   good  The hospital is good and they caring for the patient is also good so professional Dr   thanks for  Treatment   First I have ear problem , I have visited many hospitals but there was no progress ,when my relatives suggested this hospital and I have came here and Dr chabdra shekar solved my problem now I am feeling better.
                                </p>
                            </div>
                        </article>


                        <article className="testimonial-item">
                            <div className="testimonial-item-header">
                                {/*<figure className="testimonial-item-header-photo">*/}
                                {/*    <img src="https://medical-clinic.cmsmasters.net/wp-content/uploads/2015/11/3-2.jpg" alt="" />*/}
                                {/*</figure>*/}
                                <div className="testimonial-item-header-content">
                                    <div className="testimonial-item-header-title">
                                        Dadabasha Shaik
                                    </div>
                                    {/*<div className="testimonial-item-header-text">*/}
                                    {/*    Businessman*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="testimonial-item-content">
                                <div className="rating-wrapper">
                                    <div className="rating-provider">
                                        <img className="rating-provider-image" src="https://raosentcare.com/wp-content/uploads/2021/07/google-reviews1-150x150.jpg" />
                                    </div>
                                    <div className="rating-container">
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                        <i className="material-icons-outlined rating-star">star</i>
                                    </div>
                                </div>
                                Hospital environments are so natural, premises will be so lovable, And Dr treatment and diagnosis is very friendly, no panics and staff also sufficient.  Pharmacy is available and their service also impressed as they narrate about Rx and doses of the medicine, pharmacy will provide useful services to the patient benefit.
                            </div>
                        </article>


                </div>
            </div>
            </div>
        );
    }
}

export default ClientTestimonialsComponent;
