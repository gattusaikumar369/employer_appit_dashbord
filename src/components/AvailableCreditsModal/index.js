import { IoBagOutline } from "react-icons/io5";

import './index.css'; 

const AvailableCreditsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className='avaiblecredits-heading-cnt'>
         <h1 className='available-credits-heading'>Available Credits</h1>
         <button className='close-bt' onClick={onClose}>×</button>
      </div>
      <div className='job-credits-cnt'> 
         <IoBagOutline/>
         <div className="job-credits-sub-cnt">
           <p className="credits-name">Job Credits</p>
           <p className="credits-count"> <span>0</span> Credits</p>
         </div>
      </div>
      <div className='job-credits-cnt'>
         <IoBagOutline/>
         <div className="job-credits-sub-cnt">
           <p className="credits-name">Database Credits</p>
           <p className="credits-count"> <span>0</span> Credits</p>
         </div>
      </div>
    </div>
  );
}

export default AvailableCreditsModal;
