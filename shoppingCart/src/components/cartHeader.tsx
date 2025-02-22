import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card,
    CardFooter
 } from "./ui/card";
type cartHeaderProps = {
    subtotal: number,
    count : number
}

export default function CartHeader({subtotal , count} : cartHeaderProps) {
    const [empty, setEmpty] = useState<boolean>(true);
    useEffect(() => {
        if (count > 0) {
            setEmpty(false);
        }
        else {
            setEmpty(true);
        }
    },[count])
    const clearcart = () =>{
        localStorage.setItem("cartitems", JSON.stringify([]));
    } 
    return(
        <div className="w-2/5">
            <Card className="m-20">
                <h2 className="text-center pt-10 text-2xl font-medium">{count} items in Your Cart</h2>
                <h3 className="text-lg font-base text-center pt-5">Subtotal  ${subtotal}</h3>
                <CardFooter className="flex flex-col px-20 gap-2 mt-5">
                    <Button variant={"destructive"} disabled={empty}>Proceed to buy</Button>
                    <Button onClick={clearcart} disabled={empty}> Clear Cart</Button>
                </CardFooter>
            </Card>
        </div>
    ); 
}