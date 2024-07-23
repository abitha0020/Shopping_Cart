import { Product } from "@/components/producttype";
import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "./ui/button";
export default function CartCard() {
    const [items, setItem] = useState<Product[] |null>(null);
    useEffect(() => {
        const storedItems = localStorage.getItem("cartitems");
        if (storedItems) {
            setItem(JSON.parse(storedItems));
        }
        console.log(items);
    });
    
    return(
        <div>
            {items?(
                items.map((product) => (
                    <Card className="flex justify-between flex-col w-[500px] mx-auto" key={product.id} >
                    <CardHeader>
                      <CardTitle>{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img src={product.image} alt={product.title} className="w-[100px] h-[100px] mx-auto" /> 
                        <div className="">
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end ">
                        <Button variant={"destructive"}> Remove</Button>
                    </CardFooter>
                  </Card>
                ))
            ):(
                <p>You Havent selected anything</p>
            )}

        </div>
    );
}