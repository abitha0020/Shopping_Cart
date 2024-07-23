import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <div className="px-20 mx-auto flex justify-between h-[100px] bg-[#131842]">
                <div className="self-center ">
                    <p className="text-white text-3xl">Shopping App</p>
                </div>
                <div className="flex self-center">
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Home</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Products</a>
                    <Link to="/cart" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Your Cart</Link>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">login</a>
                </div>    
            </div>
        </nav>
    );
}
export default Navbar;