import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
interface Product {
    id : number,
    title : string,
    price : number,
    description : string,
    category : string
    image: string; 
}

export default function ProductCard () {
   const [result, setResult] = useState<Product[] | null>(null); 
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=9')
    .then(res=>res.json())
    .then(json=>setResult(json))
    .catch(error => console.error('Error fetching data:', error));
   },[]);
   console.log({result});
   if (result !== null) {
    console.log(result[0].title)
   }
   
   return (
    <div className="p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {result ?(
        result.map((product) => (
            <Card className="flex justify-between flex-col">
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
                <Button> Add To Cart</Button>  
                <Button variant={"destructive"}> More Details</Button>
            </CardFooter>
          </Card>
        ))
       ):(
        <p>loading..</p>
       )}
    </div>
   ); 
}
