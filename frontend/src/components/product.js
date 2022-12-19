import logo from '../logo.svg';
import {Link} from "react-router-dom"
function Product (props) {
    return (
        <div className='col-13 col-md-3 mb-4'>
        <div className="card shadow">
            <Link to='/products/python-timer/123'>
            <img src={logo} className="card-img-top" alt="..."></img>
            </Link>
            <div className="card-body">
              
            <h4 className="card-title"><Link to='/products/python-timer/123'>{props.title}</Link></h4>   
            <h5 className="card-title">Price: N1,000.0</h5> 
            </div>
            <div className='card-footer'>
            <button title='Add to Cart' className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'>
                <i className="fa-solid fa-heart"></i>
            </button>               
            </div>
        </div>
        </div>
                
    )
}
export default Product