import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <div className="px-20 mx-auto flex justify-between h-[100px] bg-[#131842]">
                <div className="self-center ">
                    <p className="text-white text-3xl">Shopping App</p>
                </div>
                <div className="flex self-center">
                    <Link to="/" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Home</Link>
                    <Link to="/" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Products</Link>
                    <Link to="/cart" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Your Cart</Link>
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;