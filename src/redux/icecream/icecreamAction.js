import { BUY_ICECREAM } from "./icecreamTypes"

export function buyIcecream(count)
{
 return {
     type:BUY_ICECREAM,
     payload:count
 }
}