import React, {Component} from 'react';
import classnames from "classnames";
import "./FaqItem.scss";


class FaqItemComponent extends Component {

    state = {
        isOpen: false,
        isDelayedOpen: false,
    }

    handleToggleItem = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));

        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    isDelayedOpen: !prevState.isDelayedOpen
                }
            });
        }, 300);
    }


    render() {
        const { isOpen,isDelayedOpen } = this.state;
        const { question, description } = this.props;
        return (
                <div className={classnames('faq-item', {'open-container':  isDelayedOpen})}>

                    <div className="faq-item-title-wrapper" onClick={this.handleToggleItem}>
                        <a className="faq-item-title">
                            {question}
                        </a>
                        <i className="material-icons-outlined">{isDelayedOpen ? 'remove' : 'add'}</i>
                    </div>

                    <div className={classnames('faq-item-description', {'container-open': isOpen})}>
                        {description}
                    </div>

                    {/*{isOpen ? (*/}
                    {/*    <div className="faq-item-description">*/}
                    {/*        Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin vel nibh et elit mollis commodo et nec augue tristique sed Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla quis lorem ut libero malesua*/}
                    {/*    </div>*/}
                    {/*) : null}*/}
                </div>
        );
    }
}

export default FaqItemComponent;
