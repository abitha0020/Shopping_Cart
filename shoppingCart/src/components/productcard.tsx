import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Product } from "./producttype";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { lineSpinner } from 'ldrs'

  

export default function ProductCard () {
   const [result, setResult] = useState<Product[] | null>(null); 
   const [addedItems, setAddedItems] = useState<number[]>([]);

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products?')
    .then(res=>res.json())
    .then(json=>setResult(json))
    .catch(error => console.error('Error fetching data:', error));

    const storedCartItems = localStorage.getItem("cartitems");
    if (storedCartItems) {
      const cartitems : Product[] = JSON.parse(storedCartItems);
      const cartitemsid =  cartitems.map((items) => items.id);
      setAddedItems(cartitemsid);
    }
   },[]);
   
   const addToCart = (product : Product) => {
       const storedCartItems = localStorage.getItem("cartitems");
       const cartItems: Product[] = storedCartItems ? JSON.parse(storedCartItems) : [];
       
       cartItems.push(product);
       localStorage.setItem("cartitems", JSON.stringify(cartItems))

       setAddedItems((prevAddedItems) => [...prevAddedItems, product.id]);

   }
   lineSpinner.register()
   return (
    <div className="p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {result ?(
        result.map((product) => (
            <Card className="flex justify-between flex-col" key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={product.image} alt={product.title} className="w-[100px] h-[100px] mx-auto" /> 
                <div className="flex justify-between">
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between ">
                <Button onClick={() => addToCart(product)} disabled={addedItems.includes(product.id)}>
                  {addedItems.includes(product.id) ? "Added ✔️" : "Add To Cart"}
                </Button>  
                <Button variant={"destructive"}> More Details</Button>
            </CardFooter>
          </Card>
        ))
       ):(
        <div className="grid place-content-center">
          <l-line-spinner
            size="40"
            stroke="3"
            speed="1" 
            color="black" 
          ></l-line-spinner>  
        </div>
       )}
    </div>
   ); 
}

