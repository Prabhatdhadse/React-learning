import "./Product.css";


function Product({ title, price, features }){
    // const list = features.map((feature) => <li>{feature}</li> );
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price+150} </h5>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
        </div>
    );
}


export default Product;