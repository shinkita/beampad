import {RiHandCoinLine} from "react-icons/ri";
const Portfolio=()=>{
return(
    <>
      <div className="container">
    <div className="row">
    <h2>My Portfolio</h2>
    </div>

       <div className="flex md:flex-row justify-between flex-wrap sm: flex-col">
       <div className="bg-white flex-1 p-10 mbspacing">
    <div className="card shadow border-1 h-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex-1">
            <h5 className="font-bold mb-2 block">Balance</h5>
            <h3 className="font-bold block">$750.90</h3>
            <div className="mt-2 mb-0 text-xs">
          <span className="badge bg-soft-success text-lg  text-black font-bold py-1 rounded-full mr-2 flex items-center leading-8">
            13% Appreciation<i className="bi bi-arrow-up me-1"></i>
          </span>
          <span className="text-lg  text-black font-bold">$ 0.0 Intial Investments</span>
        </div>
          </div>
          
          <div className="flex-none">
            <div className="bg-tertiary flex justify-center h-12 w-12 rounded-full">
              <RiHandCoinLine size="50px"></RiHandCoinLine>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white flex-1 p-10 mbspacing">
    <div className="card shadow border-1 h-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex-1">
            <h5 className="font-semibold mb-2 block">Appreciation Returns</h5>
            <h3 className="font-bold block">$750.90</h3>
          </div>
          <div className="flex-none">
            <div className="bg-tertiary flex  justify-center h-12 w-12 rounded-full">
              <RiHandCoinLine size="50px"></RiHandCoinLine>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white flex-1 p-10 mbspacing">
    <div className="card shadow border-1 h-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex-1">
            <h5 className="text-md font-semibold mb-2 block">Rental Income</h5>
            <h3 className="text-lg font-bold block">$750.90</h3>
          </div>
          <div className="flex-none">
            <div className="bg-tertiary flex  justify-center h-12 w-12 rounded-full">
              <RiHandCoinLine size="50px"></RiHandCoinLine>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</div>
  
    </div>
    </>
)
}
export default Portfolio