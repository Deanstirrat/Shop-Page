import styled from 'styled-components';

function ProductCard({id, name, image, type, price, addToCart}) {
  return (
    <ProductCardWrapper>
      <ProductImage src={image}></ProductImage>
      <ProductInfoWrapper>
        <ProductNameWrapper>
          {name}
          -
          {type}
        </ProductNameWrapper>
        <PriceWrapper>${price}.00</PriceWrapper>
        <AddToCartButtonWrapper onClick={()=>addToCart(id)}>Add to cart</AddToCartButtonWrapper>
      </ProductInfoWrapper>
    </ProductCardWrapper>
  );
}

export default ProductCard;


const PriceWrapper = styled.span`
font-size: 1.2rem;
`

const ProductImage = styled.img`
width:100%;
height:200px;
object-fit: fill;
border-radius: 10px 10px 0 0;
pointer-events: none;
`

const ProductInfoWrapper = styled.div`
color: white;
border-radius: 0px 0px 10px 10px;
padding-bottom: 5px;
background-color: #216869;
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
overflow: hidden;
`
const ProductNameWrapper = styled.div`
font-weight: bold;
display: flex;
&:first-child{
  text-align: center;
}
`
const ProductCardWrapper = styled.div`
display: flex;
flex-direction: column;
width: 30%;
align-items: center;
border-radius: 10px;
&:hover{
  transform: scale(1.05);
}
`

const AddToCartButtonWrapper = styled.button`
color: white;
background-color: #1f2421;
border: none;
width: 80%;
height: 40px;
font-weight: bold;
font-size: 1.5rem;
border-radius: 2px;

&:hover {
  filter: brightness(180%);
}
`
