// read/[id]/page.js

// 정적 경로를 생성하는 함수 추가
export async function generateStaticParams() {
    // 예시: id가 1부터 10까지 있는 경로를 생성
    const paths = Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
  
    return paths;
  }
  
  // 페이지 컴포넌트
  export default async function Read(props) {
    const topic = await fetch(`http://localhost:9999/topic/${props.params.id}`).then(res => res.json());
    const a = props.params.id;
    return (
      <>
        <h1>{a}</h1>
        <h2>{topic.title}</h2>
        artist: {topic.author}
      </>
    );
  }