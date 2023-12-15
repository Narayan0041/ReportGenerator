import React from 'react'
import { Link } from "react-router-dom";
import HeroSection from '../HeroSection/HeroSection';
export default function Navbar() {
    return (
        <div>
            <div className="NavbarSection">
                <div className="NavbrContainer">
                    <div>
                        <img src='https://techpaathshala.com/assets/images/general/footer-logo.svg' width={220} alt='LogoImage' />
                    </div>
                        <div className='NavbarDifferentSection'>
                            {/* <a href=''>Home</a> */}
                            {/* <Link to="/" element={<HeroSection/>}>Home</Link> */}
                            <a href=''>About</a>
                            <a href=''>Category</a>
                            <a href=''>Contact</a>
                            <button>Get start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



























// import React from 'react'

// export default function Navbar() {
//     // let HandleOver = (e) => {
//     //     e.preventDefault();
//     // alert("click")
//     // }
//     return (
//         <div>
//             <div className="NavbarSection">
//                 <div className="NavbarContainer">
//                     <div className="NavbarLogoSection">
//                         <img src='./image/Logo.png' width={60} alt='LogoImge' />
//                     </div>
//                     <div className='NavbarDifferentSection'>

//                         <div className='flex gap-8 '>
//                         <a href='' className='home mr-10' ><span class="fa-solid fa-house mr-10"></span></a><p className='Hover ml-20'>Home</p>
//                         </div>
//                         <a href=''><span class="fa-solid fa-address-card"></span></a><p>About</p>
//                         <a href=''><span class="fa-solid fa-list"></span></a><p>Category</p>
//                         <a href=''><span class="fa-regular fa-envelope"></span></a><p>Contact</p>
//                         <div>
//                             {/* <button>Get Start</button> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
