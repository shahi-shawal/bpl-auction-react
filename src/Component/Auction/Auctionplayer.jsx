import PropTypes from "prop-types";

const Auctionplayer = ({ player, auctionBtn }) => {
  const { name, age, salary, country, image } = player;
  return (
    <div>
      <div className="">
        <div className=" card card-compact bg-green-400 shadow-xl">
          <figure className="px-10 pt-10">
          <img src={image} alt="Product Image" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-bold">Name: {name}</h2>
            <p className="card-text text-xl">Age: {age}</p>
            <p className="card-text text-xl">Country: {country}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-red-500">
                ${salary}
              </span>
              <button onClick={()=>auctionBtn(player)}  className="btn btn-primary">Auction</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Auctionplayer.propTypes = {
  player: PropTypes.object.isRequired,
  auctionBtn: PropTypes.func.isRequired
};

export default Auctionplayer;
