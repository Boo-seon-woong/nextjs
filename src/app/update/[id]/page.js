// read/[id]/page.js

// 정적 경로를 생성하는 함수 추가
export async function generateStaticParams() {
    // 예시: id가 1부터 10까지 있는 경로를 생성
    const paths = Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
  
    return paths;
  }
  
export default function Update(){
    return <>Update</>
}