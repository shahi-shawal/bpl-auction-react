
import PropTypes from 'prop-types'
// import { FaFirstOrder } from 'react-icons/fa';
function Cart({playerAuction}) {
  let cost = 0
  playerAuction.forEach(element => {
     cost = cost+ element.salary
 });
 let totalCost = 0
    totalCost= 700000-cost;
    if (cost > 700000) {
      return alert("your balace sesh")
    }
    
    
    // console.log(cost);
    // const {name,price}=playerAuction
    // console.log(playerSalary);
  return (
    <div>
      <div className='mx-20 my-6'>
      <h1 className='text-2xl font-bold text-center'>Players Added: {playerAuction.length}{playerAuction.length===5? alert("Congratulations!!! You are Master Mind"): " "}</h1>
      <h1 className='text-2xl font-bold text-center'>Total Cost: ${cost}</h1>
      <h1 className='text-2xl font-bold text-center'>Remaining : ${totalCost}</h1>
      </div>
      {playerAuction.map((playerDetails,idx)=> <div key={idx}>
      <div className="flex flex-row card h-20 bg-green-500 mt-6 ml-10">
        {/* Image section */}
        <img src={playerDetails.image} alt="Product Image" className="card-img-center rounded-full ml-2" />

        {/* Name section */}
        <div className="card-body p-6">
          <h2 className="text-center font-bold text-xl">{playerDetails.name}</h2>
        </div>
      </div>
       
        </div>
      
      
      
      
      
      )}

    </div>
  )
}

Cart.propTypes = {
    playerAuction: PropTypes.object.isRequired,
    playerSalary: PropTypes.object.isRequired
}

export default Cart
