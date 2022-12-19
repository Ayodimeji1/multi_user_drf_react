import logo from '../logo.svg';
import {Link} from "react-router-dom"
import Product from "./product";
function CategoryProducts () {
    return(
        <section className='container mt-4'> 
           <h4 className='mb-4'>Python Products</h4>    
            <div className='row'>
                <Product title="Django Project 1"/>
                <Product title="Django Project 2"/>
                <Product title="Django Project 3"/>
                <Product title="Django Project 4"/>
                <Product title="Django Project 5"/>
                <Product title="Django Project 6"/>
                <Product title="Django Project 7"/>
            </div>    
               
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </section>
    )
}           
export default CategoryProducts
