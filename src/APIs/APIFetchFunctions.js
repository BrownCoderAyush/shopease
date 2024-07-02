import axios from "axios";
import { getCartByUser } from "./fakeStoreProdApis";

export async function fetchUserCart(userId,setCart){

    const response = await axios.get(getCartByUser(userId));
    if(response.data[0])
    setCart(response.data[0]);

}