import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <p>Header</p>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}