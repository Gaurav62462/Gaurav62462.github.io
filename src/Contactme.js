import React from 'react';


const Contactme = (props) => {
    let resumeData = props.resumeData;
    return(
       <section className="contact">
           <div className="row section-head">
               <div className="ten columns">
                   <p className="lead">
                   Feel free to contact me for any work or suggestions below
                   </p>
               </div>

           </div>
       </section>
    )
}

export default Contactme;