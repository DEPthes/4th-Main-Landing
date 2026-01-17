import styled from "styled-components";
import { isMobile, isTablet } from "@/hooks/Media";

export const Container = styled.div<{ $isLoaded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 40px;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};

  ${isTablet} {
    gap: 20px;
  }

  ${isMobile} {
    gap: 30px;
  }

  > img {
    position: absolute;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 30px;

  > p {
    transition: all 0.3s ease-in-out;
    font: var(--GMarketSansBold);
    font-size: 70px;
    color: rgba(220, 235, 245, 0.15);
    -webkit-text-stroke: 2px #dcebf5;
    background-color: black; 

    ${isTablet} {
      font-size: 60px;
      -webkit-text-stroke: 1px #dcebf5;
    }

    ${isMobile} {
      font-size: 32px;
      -webkit-text-stroke: 1px #dcebf5;
    }
  }
`;

export const TitleWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font: var(--GMarketSansBold);
  font-size: 70px;
  color: #fff;
  background-color: black; 
  > svg {
    width: 50px;
    height: 50px;
  
    ${isMobile} {
    display: none;
    }
  }
  
  ${isTablet} {
    font-size: 60px;
  }

  ${isMobile} {
    font-size: 32px;
  }
`;

export const SubText = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  line-height: 1.5;
  font-size: 20px;
  color: #898CA9;
  margin-top: 54px;
  background: linear-gradient(to bottom, #000000 -10%, #2A4891 600%); 

  ${isMobile} {
    font-size: 12px;
  }
`;

export const GradientButton = styled.button`
  transition: all 0.3s ease-in-out;
  position: relative;
  background: linear-gradient(to bottom, #1D7DF3 50%, #4223D0 100%);
  padding: 25px 35px;
  border-radius: 10px;
  z-index: 1;
  border: 1px solid #898CA9;

  ${isTablet} {
    padding: 20px 30px;
  }

  ${isMobile} {
    padding: 15px 25px;
  }
  

  > span {
    transition: all 0.3s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font: var(--MainBigBtnText);
    font-weight: 500;
    color: #fff;
    font-size: 20px;
    z-index: 1;

    ${isTablet} {
      font-size: 18px;
    }

    ${isMobile} {
      font-size: 14px;
    }
  }
`;
