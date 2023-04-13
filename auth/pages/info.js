import React from "react";
import { getSession } from "next-auth/react";

function info({ data }) {
  return <div>info page {data}</div>;
}

export default info;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `api/auth/signin?callbackUrl=http://localhost:3000/info`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? "List of info is 100" : "List of free infp",
    },
  };
}
