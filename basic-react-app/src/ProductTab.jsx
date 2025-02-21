import Product from "./product.jsx";

function ProductTab(){
  let options = [ "hi-tech","durability","fast"]
  // let options2 = {a : "hi-tech", b : "durability", c : "fast"};
    return (
        <>
          <Product title="phone" price={10000} features={[options]} />
          {/* <Product title="laptop" price={50000} /> */}
          {/* <Product title="pen" price={5} /> */}
        </>
        )
}

export default ProductTab;