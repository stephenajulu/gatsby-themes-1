import React from "react";

import DashboardButton from "./DashboardButton";
import TopLayout from "../TopLayout";

export default function ({ location, children }) {
  const currentPath = remove_lashes(location.pathname);
  return (
    <TopLayout>
      {currentPath !== "admin" && currentPath !== "editor" && (
        <div
          style={{
            width: "100%",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DashboardButton href="/admin" />
        </div>
      )}
      {children}
    </TopLayout>
  );
}

const remove_lashes = (path) => (path ? path.replace(/^\/|\/$/g, "") : "");
