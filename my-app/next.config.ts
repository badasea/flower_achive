import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  /* config options here */
  // 빌드 시 정적 파일(HTML, CSS, JS)을 생성하도록 설정합니다.
  output: "export",

  // GitHub Pages 배포를 위한 경로 설정입니다.
  // '/저장소-이름' 형식으로 꼭 바꿔주세요!
  basePath: basePath,

  // next/image 사용 시 필요할 수 있는 설정입니다.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
