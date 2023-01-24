import styled from 'styled-components';
import homepageImage from "../Assets/people-with-plants.jpeg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function HomePage() {
    return (
      <PageWrapper>
        <HomePageWrapper>
        <TextAreaWrapper>
          <HeadingWrapper>VOTED TOP PLANT RETAILER</HeadingWrapper>
          <CallToActionWrapper>We don't sell plants, we are plants</CallToActionWrapper>
          <ShopLinkWrapper to="/shop">Shop Now</ShopLinkWrapper>
        </TextAreaWrapper>
        <ImageWrapper src={homepageImage}></ImageWrapper>
      </HomePageWrapper>
      </PageWrapper>
    );
  }

  const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffbe7d;
  height: 100%;
  width: 100%;
  `

  const HomePageWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 45fr 55fr;
  align-items: top;
  width: 80%;
  color: white;
  overflow: hidden;
  `

  const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  padding: 15px;
  `

  const HeadingWrapper = styled.div`
  color: #216869;
  font-size: 1.5rem;
  &:hover{
    transform: scale(1.05);
  }
  `

  const CallToActionWrapper = styled.div`
  color: #49A078;
  font-size: 4rem;
  font-weight: bold;
  &:hover{
    transform: scale(1.05);
  }
  `

  const ShopLinkWrapper = styled(Link)`
  text-decoration: none;
  background-color: #1F2421;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  align-self: center;
  border: none;
  border-radius: 30px;
  padding: 10px;

  &:hover{
    transform: scale(1.05);
  }
  `

  const ImageWrapper = styled.img`
  width:100%;
  object-fit: fit;
  border-radius: 30% 10%;
  pointer-events: none;
  `
  
  export default HomePage;
  