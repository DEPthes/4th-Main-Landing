import * as S from "@styles/HelpPageStyle";
import FloorPlanImage from "@assets/images/floorPlan.png";
import ScheduleImage from "@assets/images/timeline.png";
import HelpBgImage from "@assets/images/background/helpBg.png";
import HelpBgMobileImage from "@assets/images/background/helpBgMobile.png";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useEffect, useState } from "react";

const HelpPage = () => {
  const { isDesktop } = useDMediaQuery();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [tap, setTap] = useState<"floorPlan" | "schedule">("floorPlan");

  const handleImageLoad = () => setIsImageLoaded(true);

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = HelpBgImage;
    img2.src = HelpBgMobileImage;

    img1.onload = handleImageLoad;
    img2.onload = handleImageLoad;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, []);

  return (
    <S.Container $isLoaded={isImageLoaded}>
      <S.TitleWrapper>
        <S.Title $isActive={tap === "floorPlan"} onClick={() => setTap("floorPlan")}>부스 배치도</S.Title>
        <S.Title $isActive={tap === "schedule"} onClick={() => setTap("schedule")}>일정 안내</S.Title>
      </S.TitleWrapper>
      {tap === "floorPlan" ? (
        <S.ImageWrap>
          <img src={FloorPlanImage} alt="부스 배치도" onLoad={handleImageLoad} />
        </S.ImageWrap>
      ) : (
        <S.ImageWrap>
          <img src={ScheduleImage} alt="일정 안내" onLoad={handleImageLoad} />
        </S.ImageWrap>
      )}
      <img
        src={isDesktop ? HelpBgImage : HelpBgMobileImage}
        alt="배경"
        onLoad={handleImageLoad}
      />
    </S.Container>
  );
};

export default HelpPage;
