import { useRouter } from "next/router";

// export async function getStaticPaths() {

//   return {
//     paths: ["/data/1", "/data/2", "/data/3"],
//     fallback: true, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ query, params }) {
//   const { dataid } = query || params;
//   // Fetch data from an external API
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + dataid
//   );
//   const blogs = await res.json();

//   // Return the data as props
//   return {
//     props: {
//       blogs,
//     },
//   };
// }

export async function getServerSideProps({ query, params }) {
  const { dataid } = query || params;
  // Fetch data from an external API
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + dataid
  );
  const blogs = await res.json();
  console.log(blogs);
  // Return the data as props
  return {
    props: {
      blogs,
    },
  };
}

function blog({ blogs }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>data is loading.......................</h1>;
  }
  return (
    <div>
      <h1>{blogs.id}</h1>
      <h1>{blogs.title}</h1>
      <h1>{blogs.body}</h1>
    </div>
  );
}

export default blog;
