import { Component, For, onMount } from "solid-js";
import { themeChange } from "theme-change";
import Theme from "./components/theme";

const App: Component = () => {
  onMount(() => {
    themeChange(false);
  });
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <div class="text-center">
        <Theme />
      </div>
    </div>
  );
};

export default App;
