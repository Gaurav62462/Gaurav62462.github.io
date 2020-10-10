import React from 'react';

const Testimoniols = (props) => {
    let resumeData = props.resumeData;
    return(
        <section id='testimonials'>
            <div className='text-container'>
                <div className='row'>
                    <div className='two columns header-col'>
                        <h1><span>Clients Testimoniols</span></h1>
                    </div>
                    <div className="ten columns flex-containers">
                        <div className="flexslider">
                            <ul className="slider">
                                {
                                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                                        return(
                                            <li>
                                                <blockquote>
                                                    <p>
                                                        {
                                                            item.description
                                                        }
                                                    </p>
                                                    <cite>{item.name}</cite>
                                                </blockquote>
                                            </li>
                                        )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimoniols;