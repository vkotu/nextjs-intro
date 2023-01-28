/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useEffect } from "react";

const Nav = () => {
  console.log("Inside Nav");
  useEffect(() => {
    console.log("useEffect Nav");
  }, []);
  return (
    <header
      sx={{
        height: "60px",
        width: "100vw",
        bg: "primary",
        borderBottom: "1px solid",
        borderColor: "primary",
      }}
    >
      <nav
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          variant: "containers.page",
          height: "100%",
        }}
      >
        <Link href="/">
          <p sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>
            Note App
          </p>
        </Link>

        <Link href="/notes">
          <p sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>notes</p>
        </Link>

        <Link href="/todos">
          <p sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>todos</p>
        </Link>
        <a
          sx={{
            color: "text",
            fontSize: 3,
            cursor: "pointer",
          }}
          href={process.env.HELP_APP_URL}
        >
          Help
        </a>
      </nav>
    </header>
  );
};

export default Nav;
