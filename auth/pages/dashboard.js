import React, { useState, useEffect } from "react";
import { signIn, signOut, getSession } from "next-auth/react";

function dashboard() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const secure = async () => {
      const session = await getSession();

      if (!session) {
        signIn();
      } else {
        setloading(false);
      }
    };

    secure();
  });

  if (loading) {
    return <h1>Loading.......................</h1>;
  }
  return (
    <div>
      <h1>dashboard page</h1>
    </div>
  );
}

export default dashboard;
