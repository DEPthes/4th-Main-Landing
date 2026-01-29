import Image1 from "@assets/images/thumbnail/seatnow.png";
import Image2 from "@assets/images/thumbnail/aim.png";
import Image3 from "@assets/images/thumbnail/deokive.png";
import Image4 from "@assets/images/thumbnail/finvibe.png";

import DetailImage1 from "@assets/images/detail/seatnow.png";
import DetailImage2 from "@assets/images/detail/aim.png";
import DetailImage3 from "@assets/images/detail/deokive.png";
import DetailImage4 from "@assets/images/detail/finvibe.png";

export const Service = [
  {
    id: 1,
    title: "SEAT NOW",
    content:
      "실시간 대학가 술집 좌석 찾기 서비스",
    image: Image1,
  },
  {
    id: 2,
    title: "AiM",
    content: "AI와 함께 목표를 조준하는 커리어 플레이 AI Route to Your AIM",
    image: Image2,
  },
  {
    id: 3,
    title: "Deokive",
    content: "덕질의 순간을 기록하는 아카이빙 플랫폼",
    image: Image3,
  },
  {
    id: 4,
    title: "FinVibe",
    content: "배우고 투자하며 함께 성장하는 MZ세대 투자자를 위한 경제 통합 플랫폼",
    image: Image4,
  },
];

export const ServiceDetailImages: Record<string, string> = {
  "1": DetailImage1,
  "2": DetailImage2,
  "3": DetailImage3,
  "4": DetailImage4,
};
