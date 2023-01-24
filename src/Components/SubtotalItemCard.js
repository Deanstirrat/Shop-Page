import styled from 'styled-components';
import products from '../Utilities/Products';

function SubtotalItemCard({id, quantity, addToCart, removeOneItem, deleteItem}) {

  let product = {};
  products.map((item) => {
    if(item.id === id){
      product =  item;
    }
  })

  return (
    <ProductCardWrapper>
      <ProductImage src={product.image}></ProductImage>
      <ProductInfoWrapper>
        {product.name}
        <ProductOptionsWrapper>
          <QuantityWrapper>
          <QuantityNumberWrapper>{quantity}</QuantityNumberWrapper>
            <PlusButtonWrapper onClick={()=>addToCart(id)}>+</PlusButtonWrapper>
            <MinusButtonWrapper onClick={()=>removeOneItem(id)}>-</MinusButtonWrapper>
          </QuantityWrapper>
          ${product.price*quantity}.00
        </ProductOptionsWrapper>
      </ProductInfoWrapper>
    </ProductCardWrapper>
  );
}

export default SubtotalItemCard;


const ProductImage = styled.img`
width:150px;
height:150px;
pointer-events: none;
`

const ProductInfoWrapper = styled.div`
display: grid;
grid-template-rows: 1fr, 2fr, 1fr;
border-radius: 0px 0px 10px 10px;
padding-bottom: 5px;
background-color: #fff6e3;
width:100%;
min-height:100%;
`
const ProductOptionsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
`
const QuantityWrapper = styled.div`
width:20%;
display: grid;
grid-template-rows: 2fr,1fr;
grid-template-columns: 2fr,1fr;
`
const QuantityNumberWrapper = styled.div`
grid-row: 1/3;
grid-column: 1/2;
`
const PlusButtonWrapper = styled.button`
grid-row: 1/2;
grid-column: 2/3;
`
const MinusButtonWrapper = styled.button`
grid-row: 2/3;
grid-column: 2/3;
`

const ProductCardWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: left;
border-radius: 10px;
`
