import './index.css'

const Billing=()=>{
  return(
     <div className='billing-page-cnt'>
        <h1 className='billing-heading'>Billing</h1>
        <div className='billing-profile-cnt'>
            <div className='billing-content-cnt'>
                <h1 className='bill-profile-heading'>Billing profile</h1>
                <p className='bill-profile-para'>Add your registered GST number and company details that would appear on your future invoices.</p>
            </div>
            <button className='bill-profile-button'>Add GSTIN number</button>
        </div>
     </div>
  )
}

export default Billing