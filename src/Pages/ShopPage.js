import products from '../Utilities/Products';
import ProductCard from '../Components/ProductCard';
import  '../Styling/ShopPage.css';
import styled from 'styled-components';

function ShopPage(props) {


  const productCards = products.map((product) => {
    return(<ProductCard 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      image={product.image} 
      type={product.type} 
      price={product.price} 
      addToCart={props.addToCart}></ProductCard>)
  })
  return (
    <div className="ShopPage">
      <Sidebar>
        categories/filters
      </Sidebar>
      <div className="ProductsContainer">
        {productCards}
      </div>
    </div>
  );
}

const Sidebar = styled.div`
color: white;
width: 100%;
background-color: #1f2421;
`


export default ShopPage;
