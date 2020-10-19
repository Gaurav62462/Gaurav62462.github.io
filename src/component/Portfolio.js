import React from 'react';
import './../App.css';

const Portfolio = (props) => {
    let resumeData = props.resumeData;
    return (
        <section id='portfolio'>
            <div className='row'>
                <div className='twelve columns collapsed'>
                    <h1>Check out of some works done by me</h1>
                    <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf' alt=''>
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item) => {
                                return (
                                    <div className='columns-portfolio-item'>
                                        <div className='item-wrap'>
                                            <a href='#model-01'>
                                                <a href={item.url}><img width={100} height={100} src={item.imgurl} className='item-img' /></a>
                                                <div className='overlay'>
                                                    <div className='portfolio -item-meta'>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <hr />
        </section>

    )
}

export default Portfolio;   