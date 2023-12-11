/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Viết vào đây để overwrite toàn bộ category
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    // Chỉ thêm thuộc tính vào nhưng vẫn giữ các thuộc tính default
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
