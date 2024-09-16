import './indexCredits.css'


const CreditsAndUsage=()=>{
    return(
       <div className='creditandusage-cnt'>
          <h1 className='creditandusage-heading'>Credits & Usage</h1>
          <div className='creditsnadusage-card-cnt'>
         
            <img src="https://i.pinimg.com/564x/35/b9/95/35b99588c0590f9a194c2aca818aae6b.jpg" alt="credits" className='credits-image'/>
             
             <h1 className='credits-card-heading'>Looks like you don’t have any credits</h1>
             <p className='credits-card-para'>All available credits & usage will be shown here, Buy credits to start hiring for your organisation</p>
             <button className='buycredits-button'>Buy Credits</button>
             <a className='credits-learn-more-para' href="#">Learn more about credits</a>
          </div>
       </div>
    )
}

export default CreditsAndUsage