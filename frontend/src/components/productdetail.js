import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Product from './product'; 
function ProductDetail () {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">    
                <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo} className="img-thumbnail mb-5" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="img-thumbnail mb-5" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="img-thumbnail mb-5" alt="..."></img>
                        </div>
                    </div>
                </div>    
                </div>


                <div className="col-8">
                    <h3>Product Title</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                    <h5 className="card-title">Price: N1,000.0</h5>
                    <p className="mt-3">
                        <Link title='Demo' target="_blank" className='btn btn-dark btn-sm'>
                        <i className="fa-solid fa-cart-shopping"></i> Demo</Link>
                        <button title='Add to Cart' className='btn btn-success btn-sm ms-1'>
                        <i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'>
                        <i className="fa-solid fa-heart"></i> Wishlist</button> 
                        <button title='Buy Now' className='btn btn-primary btn-sm ms-1'>
                        <i className="fa-solid fa-heart"></i> Buy now</button>
                    </p>
                    <div className="producttags">
                        <h5 className="mt-4">Tags</h5>
                        <p>
                            <Link to="#" className="badge bg-secondary text-white me-1">Adidas</Link>,
                            <Link to="#" className="badge bg-secondary text-white me-1">Nike</Link>,
                            <Link to="#" className="badge bg-secondary text-white">Reebok</Link>
                        </p>
                    </div>
                    
                </div>    
            </div>   
            {/* Related products */}
            <h4 className='mt-5 mb-3'>Related Products</h4>
            <div id="productThumbnailSlider" className="carousel carousel-dark slide bg-light" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mb-4">
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-4">
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-4">
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                            <Product title="Django Project 7"/>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </section>
    )
}

export default ProductDetail