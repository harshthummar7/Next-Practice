import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function blog() {
  const { data: session, status } = useSession();
  console.log({ session, status });
  if (!session) {
    return <div>Blog page</div>;
  }
  return (
    <div>
      <h1>{session.user.name} ...............welcome to blog page</h1>
    </div>
  );
}

export default blog;
