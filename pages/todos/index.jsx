import Link from "next/link";
import useClickContext from "../../src/contexts/clicks";
const todoComp = ({ content, todos }) => {
  const [clickAmount, increment] = useClickContext();
  return (
    <div>
      You clicked the button <strong>{clickAmount}</strong> times.
      <button onClick={increment}>Click me!</button>
      <p>From APP state: {content.title}</p>
      <p>{todos}</p>
      <div>Todos Page</div>
      <ul>
        <li>
          <Link href="/todos/1">Todo1</Link>
        </li>
        <li>
          <Link href="/todos/2">Todo2</Link>
        </li>
        <li>
          <Link href="/todos/3">Todo3</Link>
        </li>
        <li>
          <Link href="/todos/4">Todo4</Link>
        </li>
      </ul>
    </div>
  );
};

// export async function getServerSideProps() {
//   console.log("getserver side props todos/index.jsx");
//   return {
//     props: {
//       todos: "serverside todos index",
//     },
//   };
// }

export default todoComp;
