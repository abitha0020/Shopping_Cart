import CartCard from "@/components/cartcard";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Product } from "@/components/producttype";
import CartHeader from "@/components/cartHeader";

export default function CartPage() {
    const [items, setItem] = useState<Product[] |null>(null);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [count , setCount] = useState<number>(0);
    useEffect(() => {
        const storedItems = localStorage.getItem("cartitems");
        if (storedItems) {
            setItem(JSON.parse(storedItems));
        }
        console.log(items);
        if (items) {
            const total = items.reduce((sum, product) => sum + product.price ,0);
            setSubtotal(total);
            console.log(subtotal);
        }
    });
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <CartHeader subtotal={subtotal} />
                <CartCard products={items}/>
            </div>  
        </div>
    );
}