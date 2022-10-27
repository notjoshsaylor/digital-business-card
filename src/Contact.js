export default function Contact(){
    return(
        <div className="contact">
            <img src={require("./img/self.jpeg")} className="head-shot" alt="black and white image of a man with glasses" />
            <h1 className="contact-name">Joshua Saylor</h1>
            <h3 className="contact-sub-header">Front-End Developer</h3>
            <div className="btns" >
                <a className="contact-btn email-btn"><img className="contact-icons" src={require('./img/email.png')} />Email</a>
                <a className="contact-btn linkedin-btn"><img className="contact-icons" src={require('./img/linkedin.png')} />LinkedIn</a>
            </div>
        </div>

    )

}


