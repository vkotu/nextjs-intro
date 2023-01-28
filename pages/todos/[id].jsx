const todo = ({ id }) => {
  return <div> this is todo {id}</div>;
};

export function getStaticPaths() {
  let todos = ["1", "2", "3", "4"];
  console.log("get static paths");
  const paths = todos.map((todo) => ({
    params: {
      id: todo,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  console.log("get static props");
  console.log(context);
  return {
    props: {
      id: context.params.id,
    },
  };
}

export default todo;
