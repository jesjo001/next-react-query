import React, { Suspense } from "react";
import UsersPage from "../components/pages/UsersPage";

export default function App() {
  return (
    <Suspense fallback={<p>Loading users...</p>}>
      <UsersPage />
    </Suspense>
  );
}
