import { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";
import { ClickContextProvider } from "../src/contexts/clicks";

export default function App({ Component, pageProps }) {
  // This state is maintained through out page navigations
  //and Next.js will keep the state alive while mounting and unmounting different pages.
  const [content] = useState(pageProps.content);
  console.log("inside app");
  console.log(pageProps);
  console.log("inside app");
  useEffect(() => {
    console.log("useEffect App");
    return () => console.log("unmounting _App...");
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <ClickContextProvider>
          <Component {...pageProps} content={content} />
        </ClickContextProvider>
      </div>
    </ThemeProvider>
  );
}
