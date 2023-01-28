/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
export default function Index({ notes, content }) {
  // const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))
  let [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Use Effect called notes/index");
    return () => console.log("unmounting notes/index...");
  }, []);
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>
      <span>Count: ${count}</span>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>From APP state: {content.title}</p>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <p sx={{ textDecoration: "none", cursor: "pointer" }}>
              <div sx={{ variant: "containers.card" }}>
                <strong>{note.title}</strong>
              </div>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const delayFetch = async (cb) => {
  let p = new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(`http://localhost:3000/api/note/`);
      resolve(res);
    }, 3000);
  });
  return p;
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note/`);
  console.log("getserver side props notes/index.jsx");
  // const res = await delayFetch();
  setTimeout(() => {}, 2000);
  const { data } = await res.json();
  // console.log(count++);
  return {
    props: { notes: data },
  };
}
