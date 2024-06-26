import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

export const metadata = {
  title: "My First Next Js Project",
  description: "Generated by KCPL Boo SeonWoong",
};
export default async function RootLayout({ children }) {
   const topics = await fetch('http://localhost:9999/topic', {cache:'no-store'}).then(res => res.json());
   //const topics = await resp.json();
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
        <Control/>
      </body>
    </html>
  );
}
