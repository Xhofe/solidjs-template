import { Component, createSignal } from "solid-js";

const Page1: Component = () => {
  const [get, set] = createSignal(0);
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">Page1</p>
      <button
        onClick={() => {
          set(get() + 1);
        }}
        class="btn btn-info"
      >
        {get()}
      </button>
    </div>
  );
};

export default Page1;
