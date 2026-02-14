const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "이준수 ❤️ 장윤하의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/main-page.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/main-page.jpg",
    date: "2026년 4월 11일 토요일 2시 40분",
    venue: "더컨벤션 잠실"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 4,
    day: 11,
    hour: 14,
    minute: 40,
    displayDate: "2026.04.11 SAT PM 2:40",
  },

  // 장소 정보
  venue: {
    name: "더컨벤션 잠실",
    address: "서울특별시 송파구 올림픽로 319 (신천동 11-7)\n3층 비스타홀",
    tel: "02-418-5000",
    naverMapId: "더컨벤션 잠실", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.515651,
      longitude: 127.105465,
    },
    placeId: "13355247", // 네이버 지도 장소 ID
    mapZoom: "15", // 지도 줌 레벨
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "2호선 잠실역 8번출구 / 8호선 잠실역 9번 출구",
      bus: "간선\n 302, 320, 341, 836, 3003\n지선\n 2215, 2412, 2415, 3215, 3216, 3313, 3315, 3411, 3412, 3413, 3414, 4312, 4318, 4319",
    },
    parking: "건물 주차장 이용 가능 (2시간 무료, 만차 시 주변 주차장 안내)",
    // 신랑측 배차 안내
    // 신부측 배차 안내
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
      "/images/gallery/image10.jpg",
      "/images/gallery/image16.jpg",
      "/images/gallery/image17.jpg",
      "/images/gallery/image18.jpg",
      "/images/gallery/image19.jpg",
      "/images/gallery/image20.jpg",
      "/images/gallery/image11.jpg",
      "/images/gallery/image12.jpg",
      "/images/gallery/image13.jpg",
      "/images/gallery/image14.jpg",
      "/images/gallery/image15.jpg",
      "/images/gallery/image21.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "이준수",
      label: "아들",
      father: "이승곤",
      mother: "김민희",
    },
    bride: {
      name: "장윤하",
      label: "딸",
      father: "장희영",
      mother: "김혜영",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "국민",
      number: "937702-00-083622",
      holder: "이준수",
    },
    bride: {
      bank: "신한",
      number: "110-423-671166",
      holder: "장윤하",
    },
    groomFather: {
      bank: "신한",
      number: "110-005-335118",
      holder: "이승곤",
    },
    groomMother: {
      bank: "농협",
      number: "013-12-121328",
      holder: "김민희",
    },
    brideFather: {
      bank: "우리",
      number: "355-07-027045",
      holder: "장희영",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "신부어머니",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
