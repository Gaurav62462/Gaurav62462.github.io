import React from 'react';
import './../App.css';

const Resume = (props) => {
    let resumeData = props.resumeData;
    return (
        <section id='resume'>
            <div className='row-education'>
                <div className='three columns header-col'>
                    <h1><span>Education</span></h1>
                </div>
                <div className='nine columns main-col'>
                    {
                        resumeData.education && resumeData.education.map((item) => {
                            return (
                                <div className='row-item'>
                                    <div className='twelve columns'>
                                        <h3>
                                            {
                                                item.UniversityName
                                            }
                                        </h3>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='row-work'>
                <div className='three columns header-col'>
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {
                        resumeData.work && resumeData.work.map((item) => {
                            return (

                                <div className='twelve columns'>
                                    <h3>{item.CompanyName}</h3>
                                    <p className="info">
                                        {item.specialization}
                                        <span>&bull;</span>
                                        <em className='date'>{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                                    </p>
                                </div>


                            )
                        })
                    }
                </div>
            </div>

            <div className='row-skill'>
                <div className='three columns header-col'>
                    <p>
                        {
                            resumeData.skillsDescription
                        }
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {
                                resumeData.skills && resumeData.skills.map((item) => {
                                    return (
                                        <li>
                                            <img width={100} height={100} src={item.skillimg} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

        </section>
    )
}

export default Resume;