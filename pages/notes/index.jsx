/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';
let count = 1;
export default function Index({ notes }) {
  // const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))
  let [count, setCount] = useState(1);
  useEffect(() => {
    console.log('Use Effect called')
  }, []);
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>
      <p>Count: ${count}</p>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
            <Link key={note.id} href={`/notes/${note.id}`}>
              <p sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </p>
            </Link>
        ))}
      </div>
    </div>
  )
}

const delayFetch = async (cb) => {
  let p = new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(`http://localhost:3000/api/note/`)
      resolve(res);
    }, 3000);
  });
  return p;
}

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3000/api/note/`)
  // const res = await delayFetch();
  setTimeout(() => {}, 2000);
  const {data} = await res.json()
  console.log(count++);
  return {
    props: {notes: data}
  }
}