import product from './product';

function Image() {
  return <img src={product.image} alt="Product" style={{ width: '100%' }} />;
}

export default Image;
