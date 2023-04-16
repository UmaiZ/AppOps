import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exceed clients’ and colleagues’ expectations",
        para: "To exceed clients' and colleagues' expectations, consistently provide exceptional service, deliver quality work, and communicate effectively and professionally."
    },
    {
        id: 2,
        title: "Take ownership and question the status quo in a constructive manner",
        para: "Taking ownership and questioning the status quo constructively means being proactive, identifying areas for improvement, and suggesting solutions to achieve better outcomes."
    },
    {
        id: 3,
        title: "Be brave, curious and experiment – learn from all successes and failures",
        para: "Being brave, curious, and experimental means taking calculated risks, learning from both successes and failures, and continuously improving oneself and one's work."
    },
    {
        id: 4,
        title: "Act in a way that makes all of us proud",
        para: "Acting in a way that makes all of us proud means behaving ethically, respectfully, and professionally, and contributing positively to the team and company culture."
    },
    {
        id: 5,
        title: "Build an inclusive, transparent and socially responsible culture",
        para: "Building an inclusive, transparent, and socially responsible culture involves fostering diversity and equity, promoting open communication, and supporting community initiatives.."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="We deliver innovative, high-quality solutions tailored to your unique needs. Our collaborative approach, transparent communication, and commitment to excellence ensure your expectations are exceeded. Partner with us to achieve your business goals."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;