
import styled from 'styled-components';
import SubtotalItemCard from '../Components/SubtotalItemCard';
import products from '../Utilities/Products';

function CartPage(props) {

  let subtotal = 0;

  const subtotalItemCards = Array.from(props.cart, ([id, quantity]) => {
    for(let item of products){
      if(item.id===id) subtotal+=item.price*quantity;
    }
    return(
    <SubtotalItemCard 
      key={id} 
      id={id} 
      quantity={quantity}
      addToCart={props.addToCart}
      removeOneItem={props.removeOneItem}
      deleteItem={props.deleteItem}>
    </SubtotalItemCard>)
  })

  const subtotalTextItems = Array.from(props.cart, ([id, quantity]) => {
    for(let item of products){
      if(item.id == id){
        return(
          <SubtotalItem><SubtotalNameWrapper>{item.name}</SubtotalNameWrapper>: {item.price}.00 x {quantity} = {item.price*quantity}.00</SubtotalItem>)
      }
    }
  })

    return (
      <CartPageContainer>
        <CartItemsContainer>
        {subtotalItemCards}
        </CartItemsContainer>
        <CartSubtotalContainer>
          {subtotalTextItems}
          <SubtotalWrapper>Subtotal: {subtotal}.00</SubtotalWrapper>
          <SubtotalWrapper>Tax: {Math.round(subtotal*0.0725*100)/100}</SubtotalWrapper>
          <TotalWrapper>Total: ${subtotal + Math.round(subtotal*0.0725*100)/100}</TotalWrapper>
        </CartSubtotalContainer>

      </CartPageContainer>
    );
  }

  const SubtotalItem = styled.div`
  font-size: 1.2rem;
  `

  const CartItemsContainer = styled.div`
  width: 35%;
  background-color: #f0f6fa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  dislay: flex;
  `

  const CartSubtotalContainer = styled.div`
  width: 30%;
  background-color: #f0f6fa;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
  `

  const CartPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  `

  const SubtotalNameWrapper = styled.span`
  font-weight: bold;
  `

  const SubtotalWrapper = styled.div`
  font-size: 1.5srem;
  font-weight: bold;
  `
  const TotalWrapper = styled.div`
  font-weight: bold;
  font-size: 3rem;
  `
  
  export default CartPage;
  