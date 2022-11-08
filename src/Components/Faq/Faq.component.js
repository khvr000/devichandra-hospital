import React, {Component} from 'react';
import "./Faq.scss";
import FaqItemComponent from "./FaqItem/FaqItem.component";

class FaqComponent extends Component {

    data = [
        {
            question: 'How do I book an appointment at the hospital?',
            description: 'For booking appointments you can call us on 9848421036,  you can also walk in to the hospital with out any appointment for consultation. ',
        },
        {
            question: 'Why should I consult a specialist?',
            description: 'It is often better to prevent a problem at an early stage. A specialist would easily diagnose and reduce any further complication by accurately diagnosing the disease in the nascent stage.   ',
        },
        {
            question: 'Is online consultation available?',
            description: 'Yes, we do provide online consultation. To book an online consultation call or whatsapp on 9848421036.',
        },
        {
            question: 'Is Sri Devichandra hospital covid safe?',
            description: 'Yes, we follow social distancing, contact less payments, using disposables for out-patient and in surgeries and all the other measures suggested by the Government. ',
        },
        {
            question: 'Apart from consultation what other services do you provide?',
            description: 'We have best in class operating theatre rooms for surgeries, special rooms facilities for In-patients, dedicated pharmacy, Lab, Audiometry Lab etc.',
        },
    ];

    render() {
        return (
            <div className="faq-container" id="faq">
                <div className="faq-title-wrapper">
                    <div className="faq-heading">
                        FAQ
                    </div>
                    <div className="faq-title-description">
                        Have Some Questions?
                    </div>
                </div>

                <div className="faq-content">
                    {this.data.map(dataItem => (
                        <FaqItemComponent
                            question={dataItem.question}
                            description={dataItem.description}
                        />
                    ))}

                </div>
            </div>

        );
    }
}

export default FaqComponent;
