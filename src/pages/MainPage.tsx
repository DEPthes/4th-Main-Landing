import * as S from "@styles/MainPageStyle";
import { useNavigate } from "react-router-dom";
import MainBgImage from "@assets/images/background/mainBg.png";
import MainBgMobileImage from "@assets/images/background/mainBgMobile.png";
import ShareIcon from "@assets/icons/shareIcon.svg?react";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useEffect, useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useDMediaQuery();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = MainBgImage;
    img2.src = MainBgMobileImage;

    img1.onload = handleImageLoad;
    img2.onload = handleImageLoad;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, []);

  return (
    <S.Container $isLoaded={isImageLoaded}>
      <S.TextWrap>
        <p>DEPth 4th</p>
        <S.TitleWrap>
          <p>MAIN PROJECT</p>
          <ShareIcon />
        </S.TitleWrap>
        <S.SubText>
          <p>Do Evolve Potential in-DEPth</p>
          <p>명지대학교 IT 동아리 DEPth의 Main Project를 만나보세요.</p>
        </S.SubText>
      </S.TextWrap>
      <S.GradientButton onClick={() => navigate("/service")}>
        <span>프로젝트 둘러보기</span>
      </S.GradientButton>
      <img
        src={isMobile ? MainBgMobileImage : MainBgImage}
        alt="배경"
        onLoad={handleImageLoad}
      />
    </S.Container>
  );
};

export default MainPage;
