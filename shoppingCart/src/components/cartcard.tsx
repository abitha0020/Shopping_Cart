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
interface cartCardProps {
    products : Product[] | null;
}

export default function CartCard({ products } : cartCardProps) {
    const [items, setItem] = useState<Product[] |null>(null);
    useEffect(() => {
        setItem(products)
    },[products]);
    
    return(
        <div className="px-20">
            {items?(
                items.map((product) => (
                    <div className="mt-5">
                        <Card className=" mx-auto" key={product.id} >
                            <CardHeader>
                            <CardTitle>{product.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src={product.image} alt={product.title} className="w-[100px] h-[100px] mx-auto" /> 
                            </CardContent>
                            <CardFooter className="flex justify-between ">
                                <p>Total: ${product.price}</p>
                                <Button variant={"destructive"}> Remove</Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            ):(
                <p>You Havent selected anything</p>
            )}

        </div>
    );
}