function ProductCard({ product }) {
  return (
    <div style={{border: '5px solid white', padding: '10px', margin: '10px'}}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Status: {product.status}</p>
    </div>
  );
}

export default ProductCard;