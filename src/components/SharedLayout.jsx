import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export default function SharedLayout() {
  return (
    <>
      <nav style={{ backgroundColor: "darkblue", color: "white" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 1200,
            margin: "0 auto",
            padding: "20px 0",
          }}
        >
          <li>
            <NavLink to="/">
              <span style={{ color: "white" }}>GoIT - React</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/class-components">Class components</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
        </ul>
      </nav>
      <main style={{ width: 1200, margin: "0 auto" }}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  );
}
