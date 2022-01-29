import { Link, Route, Routes } from "solid-app-router";
import { Component, For, lazy, onMount } from "solid-js";
import { themeChange } from "theme-change";
import Theme from "./components/theme";

const Page1 = lazy(() => import("./pages/page1"));
const Page2 = lazy(() => import("./pages/page2"));

const App: Component = () => {
  onMount(() => {
    themeChange(false);
  });
  return (
    <div class="p-10">
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <div class="text-center">
        <Theme />
      </div>
      <div>
        <ul class="menu w-64 p-3 border bg-base-100 rounded-box">
          <li class="menu-title">
            <span>Menu Title</span>
          </li>
          <li>
            <Link class="nav" href="/page1">
              Page1
            </Link>
          </li>
          <li>
            <Link class="nav" href="/page2">
              Page2
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
