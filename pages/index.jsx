/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
// import Browser from '../src/components/browser';
import { useEffect } from "react";
import dynamic from "next/dynamic";
import useClickContext from "../src/contexts/clicks";

const BrowserComponent = dynamic(() => import("../src/components/browser"), {
  ssr: false,
});

const index = (props) => {
  console.log("in pages/index");
  console.log(props);
  console.log("in pages/index");
  let { content } = props;
  const [clickAmount, increment] = useClickContext();
  useEffect(() => {
    console.log("Use Effect called pages/index");
    return () => console.log("unmounting pages/index...");
  }, []);
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      You clicked the button <strong>{clickAmount}</strong> times.
      <button onClick={increment}>Click me!</button>
      <BrowserComponent />
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  console.log("getserver side props pages/index.jsx");
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
}
