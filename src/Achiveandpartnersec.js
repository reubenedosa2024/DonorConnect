import React from 'react';
import './App.css';
import redcross from './images/redcross.png';
import savethechildren from './images/savethechildren.png';
import NBTS from './images/NBTS.png';
import WHO from './images/WHO.png';
import UNICEF from './images/UNICEF.png';
import gbf from './images/gbf.png';
import nbsa from './images/nbsa.png';
const Achiveandpartnersec = () => {
    // const partners = [
    //     { src: {redcross}, alt: 'Red Cross' },
    //     { src: {redcross}, alt: 'Save the Children' },
    //     { src: {redcross}, alt: 'Hospital' },
    //     { src: {redcross}, alt: 'World Health Organization' },
    //     { src: {redcross}, alt: 'UNICEF' },
    //     { src: {redcross}, alt: 'Global Blood Fund' },
    //     { src: {redcross}, alt: 'Hospital 2' },
    //   ];
      
    //   const renderPartnerImages = (partners) => {
    //     return partners.map((partner, index) => (
    //       <img key={index} src={partner.src} alt={partner.alt} className="partner-logo" />
    //     ));
     

    return (
        <div className='wholeachive'>
        <div className='archivehead'>
            <h1>Archivements</h1>
            <p>we have help save different victim life through  with the blood donated, see  some below</p>
        </div>
         <div className='achivediv'>
            <div className='achivetext'>
            <h2>2,828</h2>
            <p>Number of Patients Helped</p>
            </div>

            <div className='achivetext'>
            <h2>3,328</h2>
            <p>Number of Registered Donors</p>
            </div>

            <div className='achivetext'>
            <h2>2,000</h2>
            <p>Number of Pints Collected</p>
            </div>

            <div className='achivetext'>
            <h2>2,000</h2>
            <p>Number of Hospitals</p>
            </div>
        </div>
        <div className='partnerdiv'>
            <div>
                <h1>Our Partners</h1>
                <p>We collaborate with hospitals, NGOs, and corporations to ensure a seamless blood donation process.</p>
            </div>
            <div className="partners-container">
            <img src={redcross}/>
            <img src={savethechildren}/>
            <img src={NBTS}/>
            <img src={WHO}/>
            <img src={UNICEF}/>
            <img src={gbf}/>
            <img src={nbsa}/>
            </div>
        </div>
            </div>
    );
};

export default Achiveandpartnersec;