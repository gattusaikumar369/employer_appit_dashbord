import {Link} from "react-router-dom"
import { PiBagFill, PiCreditCardFill } from "react-icons/pi";
import { GiTwoCoins } from 'react-icons/gi';
import { FaCloudMeatball } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { IoGift } from "react-icons/io5";
import { MdPhoneCallback } from "react-icons/md";
import { useState } from "react";
import './index.css'


const Dashbord=()=>{
     
    const [show, setShowData]=useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick=(index)=>{
        setSelectedIndex(index);
    }
    
    return(
       <div className='dashbord-cnt'>
           <div className='dashboard-list-items-container'>
              <ul className='dashboard-list-items-cnt'>
                <li  className={`dashboard-list-item ${selectedIndex === 0 ? 'click-item' : ''}`} onClick={() => handleClick(0)}> 
                    <Link to="/job" className="dashboard-link-item"> 
                       <PiBagFill  className="dashboard-icons"/>
                       <p className="dash-item-name">Jobs</p>
                    </Link>
                </li>
                <li className='dashboard-list-item'> 
                    <div className="dashboard-link-data-cnt">
                        <div className="database-link-name-cnt " onClick={()=>setShowData(!show)}>
                            <FaCloudMeatball className="dashboard-icons"/>
                            <p className="dash-item-name">Database</p>
                        </div>
                       {show && <div className="dash-data-sub-items-cnt">
                            <Link className={`link-item ${selectedIndex === 1 ? 'click-item' : ''}`} onClick={() => handleClick(1)}><p className="dash-data-link-name">Search Candiats</p></Link>
                            <Link className={`link-item ${selectedIndex === 2 ? 'click-item' : ''}`} onClick={() => handleClick(2)}><p className="dash-data-link-name">Saved Searches</p></Link>
                            <Link className={`link-item ${selectedIndex === 3 ? 'click-item' : ''}`} onClick={() => handleClick(3)}><p className="dash-data-link-name">Unlocked Candiates</p></Link>
                        </div>
                        } 
                    </div>
                </li>
                <li className={`dashboard-list-item ${selectedIndex === 4 ? 'click-item' : ''}`} onClick={() => handleClick(4)}> 
                    <Link className="dashboard-link-item"> 
                       <BiSolidReport  className="dashboard-icons"/>
                       <p className="dash-item-name">Reports</p>
                    </Link>
                </li>
                <hr className="hr-line"/>
                <li className={`dashboard-list-item ${selectedIndex === 5 ? 'click-item' : ''}`} onClick={() => handleClick(5)}> 
                    <Link to="/creditsusage" className="dashboard-link-item"> 
                       <PiCreditCardFill  className="dashboard-icons"/>
                       <p className="dash-item-name">Credits & Usage</p>
                    </Link>
                </li>

                <li className={`dashboard-list-item ${selectedIndex === 6 ? 'click-item' : ''}`} onClick={() => handleClick(6)}> 
                    <Link to="/billing"className="dashboard-link-item"> 
                       <GiNotebook className="dashboard-icons"/>
                       <p className="dash-item-name">Billing</p>
                    </Link>
                </li>
                <hr className="hr-line"/>
                <li className={`dashboard-list-item ${selectedIndex === 7 ? 'click-item' : ''}`} onClick={() => handleClick(7)}> 
                    <Link className="dashboard-link-item"> 
                        <IoGift  className="dashboard-icons"/>
                        <p className="dash-item-name">Refer & Earn</p>
                    </Link>
                    </li>
              </ul>
           </div>
           <div className='dashboard-contact-list-items-cnt'>
              <ul className="contact-list-items-cnt">
                    <li className={`dashboard-list-item contact ${selectedIndex === 8 ? 'click-item' : ''}`} onClick={() => handleClick(8)}>
                        <Link className="dashboard-link-item">
                            <MdPhoneCallback  className="dashboard-icons"/> 
                            <p className="dash-item-name">Contact& Sales</p>
                        </Link>
                    </li>
              </ul>
              <hr className="hr-line line"/>
             <button className="buy-credits-button"> < GiTwoCoins size={18} className="button-icon"/> Buy Credits</button>
           </div>
       </div>
    )
}
export default Dashbord