import GameImg from './images/pubgzoom.png';
function PopUp() {
  return (
    <div className='popup'>
        <div className='headerpopup'>
            <div className='dib '>
            <img className='popupimg' src={GameImg} alt='gameimg'/>
                </div>
                <div className='dib poa b0'>
                <div className='date gamename'>  game name
            </div>
                <div className='difftime country'>  country
            </div>
            </div>
            </div>
            <div className='popupPricing'>
                Pricing
                </div>
                <div className='pricerow'>
                    <span className='popupDuration'>1 Week - 1 Month</span>
                    <span className='popupPrice'>$ 100.00</span>
                    </div>
                    <div className='pricerow'>
                    <span className='popupDuration'>6 Months</span>
                    <span className='popupPrice'>$ 100.00</span>
                    </div>
                    <div className='pricerow'>
                    <span className='popupDuration'>1 Year</span>
                    <span className='popupPrice'>$ 100.00</span>
                    </div>
                    
                        <button  className='closebutton'>Close</button>
                        
    </div>
  );
}

export default PopUp;
