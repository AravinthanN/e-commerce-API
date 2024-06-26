import {Link} from "react-router-dom";
import { useContext } from 'react';
// import EcomRedux from "./EcomRedux";
import EcomRedux from "./EcomRedux";
import Register from './Register';
import contextCreate from "./context";
import { namebar } from './slice';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {cart,cartToCheck} from './slice';
// import useHistory from 'react-router';


export default function Header()
{

    // const [formData, setFormData] = useContext(contextCreate);
    const name = useSelector((s)=> s.namebar1.value);
    const countOfEcomRedux = useSelector((s)=> s.count.value);
    const dispatch = useDispatch();

    const navigate=useNavigate();

    const searchProducts = ()=>{

        const v= document.getElementById('searchTab').value;
        console.log(v);
        navigate(
             '/AllProduct/'+v
            
        );

    }

    const clearCart =()=>{
       dispatch(cart({productId:"no",quantity:1}));
       dispatch(cartToCheck([]));
    }
    return (
        <>
        {/* Navbar start */}
        <div class="container-fluid fixed-top" style={{position:"relative"}}>
            <div class="container topbar bg-primary d-none d-lg-block">

                
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        {/* <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" class="text-white">123 Street, New York</a></small> */}
                        {/* <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#" class="text-white">Email@Example.com</a></small> */}
                    </div>


                {name!=" " ?(<p style={{color:"yellow", filter:"drop-Shadow(0px 0px 10px blue)", marginLeft:"250px"}}>{"Welcome, Mr. " + name}</p>) : null}
                {/* {formData.userId!=" " ?(<p style={{color:"yellow", filter:"drop-Shadow(0px 0px 10px blue)"}}>{"Welcome, Mr. " + formData.userId}</p>) : null} */}


                    <div class="top-link pe-2">
                        <a href="#" class="text-white"><small class="text-white mx-2">Privacy Policy</small>/</a>
                        <a href="#" class="text-white"><small class="text-white mx-2">Terms of Use</small>/</a>
                        <a href="#" class="text-white"><small class="text-white ms-2">Sales and Refunds</small></a>
                    </div>

                    
                </div>

                <div id="searchDiv" style={{marginLeft:"450px", gridGap:"15px"}}>
                                 <input type="text" id="searchTab" placeholder="search products"  ></input>
                                 <button type="submit" id="searchButton" onClick={searchProducts}>search</button>
               </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl" id="nav">
                    <a href="index.html" class="navbar-brand"><h1 class="text-primary display-6">MAPI EcomRedux </h1></a>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse" >
                        <div class="navbar-nav mx-auto">
                            <Link to="/AllProduct/All" class="nav-item nav-link active"  style={{fontSize:"20px"}}>Home</Link>
                            <Link to="/AllProduct/All"  class="nav-item nav-link" style={{fontSize:"20px"}}>Shop</Link>
                            <Link to="/AllProduct/All"   class="nav-item nav-link"  style={{fontSize:"20px"}}>Shop Detail</Link>
                            <div class="nav-item dropdown" style={{fontSize:"20px"}}>
                                <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{fontSize:"20px"}}>Pages</Link>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="/EcomRedux" class="dropdown-item">Cart</Link>
                                    <Link to="/CheckoutForm" class="dropdown-item">Checkout</Link>
                                    <Link to="#" class="dropdown-item">Testimonial</Link>
                                    <Link to="#" class="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/Contact" class="nav-item nav-link" style={{fontSize:"20px"}}>Contact</Link>
                        </div>
                        <div class="d-flex m-3 me-0">
                            {/* <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button> */}
                        
                            <Link to="/EcomRedux" class="position-relative me-4 my-auto">                              
                                <i class="fa fa-shopping-bag fa-2x" style={{color:"#09B9AC"}}></i>
                                {/* <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{top: "-5px", left: "15px", height: "20px", minWidth: "20px"}}>{countOfEcomRedux}</span> */}
                            </Link>



                            <Link to="/Register" class="my-auto">
                                <i class="fas fa-user fa-2x" style={{color:"#09B9AC"}} onClick={clearCart}></i>
                            </Link>


                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}