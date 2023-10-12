
import {BsArrowLeftSquare} from "react-icons/Bs"

const Cart = ({ cart }) => {
    return<>{cart?<></>:<EmptyCart/>}</>
 }


const EmptyCart = () => {
   
    return <>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3 text-center">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Your cart is empty</h1>
                <a class="btn btn-light btn-lg" href="/products">
                    <BsArrowLeftSquare/>&nbsp; Continue shopping</a>
      </div>
    </div></>
}


export default Cart;


