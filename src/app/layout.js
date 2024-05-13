import Link from "next/link";
import "./globals.css";
/*export const metadata = {
  title: "My First Next Js Project",
  description: "Generated by KCPL Boo SeonWoong",
};
*/
export default async function RootLayout({ children }) {
   const resp = await fetch('http://localhost:9999/topic');
   const topics = await resp.json();
  return (
    <html>
      <body >
        <h1><Link href="/">WEB</Link></h1>
        <ul>
          {
            topics.map((topic)=>{
              return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
            })
          }
        </ul>
        <ol>
          <li><Link href="/read/1">html</Link></li>
          <li><Link href="/read/2">css</Link></li>
        </ol>
        {children}
        <ul>
        <li><Link href="/create">create</Link></li>
        <li><Link href="/update/1">update</Link></li>
        <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  );
}
